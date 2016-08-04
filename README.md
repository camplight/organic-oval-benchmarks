# ovaljs benchmarks

## setup

```
$ npm install
$ angel develop
```

## usage

Open see console's output respectively for every test:

* http://127.0.0.1:1337

## benchmarks dump

* Hardware:
  * CPU: Intel® Core™ i7-4810MQ CPU @ 2.80GHz × 8
  * RAM: 16 Gb
  * Video: Quadro K2100M/PCIe/SSE2
  * OS: Ubuntu 15.04 64-bit

* React 15
  * mount & render: 6333.673ms
  * re-render: 1934.954ms
  * remove item: 1395.817ms
  * add item: 1570.665ms
  * timers rate: ~2.309
* Riot 3 alpha 5
  * mount & render: N/A
  * re-render: 694.627ms
  * remove item: 1604.847ms
  * add item: 518.724ms
  * timers rate: ~7.791
* VueJS
  * mount & render: 8674.924ms
  * re-render: N/A
  * remove item: N/A
  * add item: N/A
* RactiveJS
  * mount & render: 5994.579ms
  * re-render: 1045.420ms
  * remove item: 5201.263ms
  * add item: 1176.569ms
* Oval
  * mount & render: 1375.766ms
  * re-render: 775.713ms
  * remove item: 796.941ms
  * add item: 699.663ms
  * timers rate: ~4.492
