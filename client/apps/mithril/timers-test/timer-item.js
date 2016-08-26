
var m = window.mithril

module.exports = {
  oninit: function (vnode) {
    var ctrl = this
    var args = vnode.attrs

    args.item.intervalID = setInterval(() => {
      args.item.value = Math.random() * 100
      m.redraw()
    }, Math.random() * 10)

    ctrl.onupdate = () => args.capture()

    return ctrl
  },
  view: (vnode) =>
    m('div',
      {onupdate: vnode.state.onupdate},
      vnode.attrs.item.id + ' - ', vnode.attrs.item.value
    )
}
