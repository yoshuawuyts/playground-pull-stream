# playground-pull-stream
Playing around with [pull-stream][0]

## Benchmarks
```txt
❯ wrk -c 400 -d 30 -t 12 http://localhost:1337
Running 30s test @ http://localhost:1337
  12 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    69.93ms    8.98ms 255.82ms   88.06%
    Req/Sec   286.59    173.31   690.00     65.70%
  102643 requests in 30.10s, 28.39MB read
  Socket errors: connect 157, read 102, write 1, timeout 0
Requests/sec:   3409.93
Transfer/sec:      0.94MB
```

## See Also
- https://www.npmjs.com/package/send-data
- https://www.npmjs.com/search?q=pull-stream
- https://github.com/dominictarr/pull-stream/blob/master/docs/sinks.md
- https://github.com/dominictarr/pull-stream/blob/master/docs/throughs.md
- https://github.com/dominictarr/pull-stream/blob/master/docs/sources.md

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://github.com/dominictarr/pull-stream
