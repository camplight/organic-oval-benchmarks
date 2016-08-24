
var m = window.mithril

module.exports = {
  controller: function (args) {
    var ctrl = {}

    args.item.intervalID = setInterval(() => {
      args.item.value = Math.random() * 100
      m.redraw()
    }, Math.random() * 10)

    ctrl.config = (el, init, ctx) => {
      args.capture()
    }

    return ctrl
  },
  view: (ctrl, args) =>
    m('div', {config: ctrl.config}, args.item.id + ' - ', args.item.value)
}
