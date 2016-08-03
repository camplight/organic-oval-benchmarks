var React = require('react')
var Item = require('./timer-item')
var count = 0

module.exports = React.createClass({
  getInitialState: function () {
    var items = []
    for (var i = 0; i < 5000; i++) {
      items.push({id: i, value: Math.random() * 100})
    }
    return {
      items: items
    }
  },

  componentWillMount: function () {
    console.time('time')
    var intervalID = setInterval(function () {
      console.log('updated per')
      console.timeEnd('time')
      console.log('count', count)
      count = 0
      console.time('time')
    }, 1000)
  },

  captureUpdateStats: function () {
    count += 1
  },

  render: function() {
    return (
      <div>
        {
          this.state.items.map((item) => {
            return (
              <div key={item.id}>
                <Item item={item} onupdated={this.captureUpdateStats}></Item>
              </div>
            )
          })
        }
      </div>
    )
  }

})
