<oval-loop>
  <script>
    require('./loop-item')

    this.refresh = () => {
      this.update()
    }

    this.addItem = () => {
      this.state.items.push({value: this.state.items.length, id: Math.random()})
      this.update()
    }

    this.removeItem = function (item) {
      return () => {
        this.state.items.splice(this.state.items.indexOf(item), 1)
        this.update()
      }
    }

    this.state = {
      items: []
    }
    for (var i = 0; i < 10000; i++) {
      this.state.items.push({value: i, id: Math.random()})
    }
    this.on('mount', () => {
      console.time('mounted')
    })
    this.on('update', () => {
      console.time('updated')
    })
    this.on('updated', () => {
      console.timeEnd('updated')
    })
    this.on('mounted', () => {
      console.timeEnd('mounted')
    })
  </script>
  <div>
    <h1>Each loop test</h1>
    <button onclick={this.addItem}>add</button>
    <button onclick={this.refresh}>refresh</button>
    <each item in {this.state.items}>
      <div key={item.value}>
        <loop-item value={item.value}></loop-item>
        <button onclick={this.removeItem(item)}>remove</button>
      </div>
    </each>
  </div>
</oval-loop>
