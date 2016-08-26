
var m = window.mithril
var Item = require('./timer-item')

module.exports = {
  oninit: function (vnode) {
    var timerStats = require('timers-stats')
    var ctrl = this

    ctrl.items = []
    for (var i = 0; i < 2000; i++) {
      ctrl.items.push({
        id: i,
        value: Math.random() * 100,
        intervalID: null
      })
    }

    ctrl.captureUpdateStats = () => timerStats.capture()
    timerStats.init(10)
  },
  view: (vnode) =>
    vnode.state.items.map((item) =>
      m(Item, {item, capture: vnode.state.captureUpdateStats})
    )
}
