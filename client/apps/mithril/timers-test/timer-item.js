
var m = window.mithril

module.exports = {
  controller: function (args) {
    var ctrl = {}

    args.item.intervalID = setInterval(() => {
      args.item.value = Math.random() * 100
    }, Math.random() * 10)

    ctrl.config = () => args.capture()

    return ctrl
  },
  view: (ctrl, args) =>
    m('div', {config: ctrl.config}, args.item.id + ' - ', args.item.value)
}
