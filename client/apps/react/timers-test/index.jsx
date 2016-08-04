var React = require('react')
var Item = require('./timer-item')
var timerStats = require('timers-stats')

module.exports = React.createClass({
  getInitialState: function () {
    var items = []
    for (var i = 0; i < 2000; i++) {
      items.push({id: i, value: Math.random() * 100})
    }
    return {
      items: items
    }
  },

  componentWillMount: function () {
    timerStats.init(10)
  },

  captureUpdateStats: function () {
    timerStats.capture()
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
