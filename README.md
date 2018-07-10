# ovaljs benchmarks

## setup

```
$ npm install
$ npx devshell
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

Framework | mount & render | re-render | remove item | add item 
:--       | :--            | :--       | :--         | :--      
PReact    | ~500ms         | ~100ms    | ~100ms      | ~100ms
Oval      | ~800ms         | ~150ms    | ~150ms      | ~150ms
