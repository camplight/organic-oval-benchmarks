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

Framework | mount & render | re-render | remove item | add item | timers rate
:--       | :--            | :--       | :--         | :--      | :--
React 15 | 6333.673ms | 1934.954ms | 1395.817ms | 1570.665ms | ~2.309 (higher is better)
Riot 3 alpha 5 | N/A | 694.627ms | 1604.847ms | 518.724ms | ~7.791 (higher is better)
VueJS | 8674.924ms | N/A | N/A | N/A | -
RactiveJS | 5994.579ms | 1045.420ms | 5201.263ms | 1176.569ms | -
Mithril 0.x | 1823.320ms | 865.806ms | 978.133ms | 849.867ms | ~34.97 :question: (visually unresponsive, higher is better)
Oval | 1593.238ms | 197.349ms | 193.591ms | 192.182ms | ~8.890 (higher is better)
