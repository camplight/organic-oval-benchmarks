
var m = window.mithril
var Item = require('./timer-item')

module.exports = {
  controller: function () {
    var timerStats = require('timers-stats')
    var ctrl = {}

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

    return ctrl
  },
  view: (ctrl) =>
    ctrl.items.map((item) =>
      m(Item, {item, capture: ctrl.captureUpdateStats})
    )
}
