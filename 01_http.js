// const serverRouter = require('server-router')
const sendError = require('send-data/error')
const sendJson = require('send-data/json')
const parseJson = require('body/json')
const pull = require('pull-stream')
const http = require('http')

http.createServer(function (req, res) {
  const source = createReader(req, res)
  const sink = createSink(req, res)
  pull(source, sink)
}).listen(1337)

function createReader (req, res) {
  var done = false

  return function (end, cb) {
    if (end) return cb(({ body: new Error(end) }))
    if (done) return cb(true)

    parseJson(req, res, function (err, data) {
      if (err) {
        return cb({ statusCode: 400, body: new Error('No JSON hey') })
      }
      done = true
      cb(null, data)
    })
  }
}

function createSink (req, res) {
  return function (read) {
    read(null, function next (end, data) {
      if (end === true) return
      if (end) return sendError(req, res, end)
      sendJson(req, res, data)
      read(null, next)
    })
  }
}
