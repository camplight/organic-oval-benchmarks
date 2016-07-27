var React = require('react')
var Item = require('./item')

module.exports = React.createClass({
  propTypes: {

  },

  componentWillMount: function () {
    console.time('each-loop-mount')
  },
  componentDidMount: function () {
    console.timeEnd('each-loop-mount')
  },

  componentWillUpdate: function () {
    console.time('each-loop')
  },

  componentDidUpdate: function () {
    console.timeEnd('each-loop')
  },

  getInitialState: function () {
    var items = []
    for (var i = 0; i < 10000; i++) {
      items.push({value: i, id: Math.random()})
    }
    return {
      items: items
    }
  },

  addItem: function () {
    var items = this.state.items
    items.push({value: items.length, id: Math.random()})
    this.setState({items: items})
  },

  refresh: function () {
    this.forceUpdate()
  },

  removeItem: function (item) {
    var self = this
    return function () {
      var items = self.state.items
      items.splice(items.indexOf(item), 1)
      self.setState(items)
    }
  },

  render: function() {
    return (
      <div>
        <h1>Each Loop test</h1>
        <button onClick={this.addItem}>add</button>
        <button onClick={this.refresh}>refresh</button>
        {
          this.state.items.map((item) => {
            return (
              <div key={item.id}>
                <Item value={item.value}></Item>
                <button onClick={this.removeItem(item)}>remove</button>
              </div>
            )
          })
        }
      </div>
    )
  }

})
