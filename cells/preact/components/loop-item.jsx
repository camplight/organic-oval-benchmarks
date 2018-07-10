import { h, Component } from 'preact'

module.exports = class extends Component {
  constructor () {
    super()
    this.state = {items: [1, 2, 3]}
  }

  render (props, state) {
    return <div>
      {props.value}
      {state.items.map((m) => (
        <span>{m}</span>
      ))}
    </div>
  }
}
