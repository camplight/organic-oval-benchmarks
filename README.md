# ovaljs benchmarks

## setup

```
$ npm install
$ angel develop
```

## usage

Open one by one and see console's output respectively:

* http://127.0.0.1:1337/react
* http://127.0.0.1:1337/riot
* http://127.0.0.1:1337/oval

## benchmarks dump

* Hardware:
  * CPU: Intel® Core™ i7-4810MQ CPU @ 2.80GHz × 8
  * RAM: 16 Gb
  * Video: Quadro K2100M/PCIe/SSE2
  * OS: Ubuntu 15.04 64-bit

* React 15
  * mount & render: 6333.673ms
  * re-render: 1934.954ms
* Riot 2
  * mount & render: 12412.204ms
  * re-render: 1820.034ms
* Oval
  * mount & render: 1375.766ms
  * re-render: 775.713ms
