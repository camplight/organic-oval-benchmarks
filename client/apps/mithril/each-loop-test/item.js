
var m = window.mithril

module.exports = {
  controller: function () {
    return {
      rendered: false,
      items: [1, 2, 3]
    }
  },
  view: (ctrl, args) =>
    (!ctrl.rendered)
      ? m('span', [args.value, ' ', ctrl.items.map((item) => m('span', item))])
      : {subtree: 'retain'}
}
