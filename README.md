# ovaljs benchmarks

## setup

```
$ npm install
$ npx angel repo cells -- npm install
$ npx devshell
```

## usage

Open see console's output respectively for every test:

* http://127.0.0.1:1337

## benchmarks dump
  
* Versions:
  * [organic-oval](https://github.com/node-organic/organic-oval/tree/f17408f1811663edcab7aff75ca0892f49219993)
  * "preact": "10.0.0-beta.1"

Framework  | mount & render | re-render | remove item | add item 
:--        | :--            | :--       | :--         | :--      
PReact v10 | ~600ms         | ~312ms    | ~200ms      | ~140ms
Oval v5    | ~900ms         | ~442ms    | ~248ms      | ~200ms

* Note that benchmarks are shown in miliseconds but should be taken as relative because different browsers and host machines would produce different results.
