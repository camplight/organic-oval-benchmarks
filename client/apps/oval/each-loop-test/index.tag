<each-loop-test>
  <script>
    require('./loop-item')

    tag.refresh = function () {
      tag.update()
    }

    tag.addItem = function () {
      tag.state.items.push({value: tag.state.items.length, id: Math.random()})
      tag.update()
    }

    tag.removeItem = function (item) {
      return function () {
        tag.state.items.splice(tag.state.items.indexOf(item), 1)
        tag.update()
        console.log('removed and updated', tag.state.items.length)
      }
    }

    tag.state = {
      items: []
    }
    for (var i = 0; i < 10000; i++) {
      tag.state.items.push({value: i, id: Math.random()})
    }
    tag.on('update', function () {
      console.time('updated')
    })
    tag.on('updated', function () {
      console.timeEnd('updated')
    })
  </script>
  <h1>Each loop test</h1>
  <button onclick={tag.addItem}>add</button>
  <button onclick={tag.refresh}>refresh</button>
  <each item in {tag.state.items}>
    <div id={item.id} class={item.value}>
      <loop-item ref-value={item.value}></loop-item>
      <button onclick={tag.removeItem(item)}>remove</button>
    </div>
  </each>
</each-loop-test>
