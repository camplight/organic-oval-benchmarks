<template>
  <h1>Each Loop Test</h1>
  <button @click="addItem">add</button>
  <button @click="refresh">refresh</button>
  <template v-for="item in items">
    <loop-item :value="item.value"></loop-item>
    <button @click="removeItem(item)">remove</button>
  </template>
</template>

<script>
var EachLoopItem = require('./loop-item')
var items = []
for (var i = 0; i < 10000; i++) {
  items.push({value: i, id: Math.random()})
}
export default {
  components: {
    'loop-item': EachLoopItem
  },
  data: function () {
    return {
      items: items
    }
  },
  created: function () {
    console.time('each-loop-test')
  },
  ready: function () {
    console.timeEnd('each-loop-test')
  },
  methods: {
    addItem: function () {
      items.push({value: items.length, id: Math.random()})
    },
    refresh: function () {
      console.info('not possible?', 'https://github.com/vuejs/Discussion/issues/356')
    },
    removeItem: function (item) {
      items.splice(items.indexOf(item), 1)
    }
  }
}
</script>
