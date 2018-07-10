import { h, Component } from 'preact'
const LoopItem = require('./loop-item')

module.exports = class extends Component {
  constructor () {
    super()
    this.state = {
      items: []
    }
    for (var i = 0; i < 10000; i++) {
      this.state.items.push({value: i, id: Math.random()})
    }
  }
  componentWillMount () {
    console.time('mounted')
  }
  componentWillUpdate () {
    console.time('updated')
  }
  componentDidUpdate () {
    console.timeEnd('updated')
  }
  componentDidMount () {
    console.timeEnd('mounted')
  }

  addItem () {
    return () => {
      this.state.items.push({value: this.state.items.length, id: Math.random()})
      this.setState({
        items: this.state.items
      })
    }
  }

  refresh () {
    return () => {
      this.setState(this.state)
    }
  }

  removeItem (item) {
    return () => {
      this.state.items.splice(this.state.items.indexOf(item), 1)
      this.setState({
        items: this.state.items
      })
    }
  }

  render (props, state) {
    return <div>
      <h1>Each loop test</h1>
      <button onClick={this.addItem()}>add</button>
      <button onClick={this.refresh()}>refresh</button>
      {state.items.map((item) => (
        <div key={item.value}>
          <LoopItem value={item.value}></LoopItem>
          <button onClick={this.removeItem(item)}>remove</button>
        </div>
      ))}
    </div>
  }
}
