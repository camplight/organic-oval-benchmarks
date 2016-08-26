
var m = window.mithril

module.exports = {
  oninit: function (vnode) {
    vnode.state.items = [1, 2, 3]
  },
  view: (vnode) =>
    m('span', [
      vnode.attrs.value,
      ' ',
      vnode.state.items.map((item) => m('span', item))
    ])
}
