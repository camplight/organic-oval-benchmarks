
var m = window.mithril
var Item = require('./item')

module.exports = {
  oninit: function (vnode) {
    console.time('each-loop-mount')
    var ctrl = this

    ctrl.items = []
    for (var i = 0; i < 10000; i++) {
      ctrl.items.push({value: i, id: Math.random()})
    }

    ctrl.addItem = () => {
      ctrl.items.push({value: ctrl.items.length, id: Math.random()})
    }
    ctrl.refresh = () => {
      m.redraw()
    }
    ctrl.removeItem = (item) => () => {
      ctrl.items.splice(ctrl.items.indexOf(item), 1)
    }

    ctrl.oncreate = (vnode) => {
      console.timeEnd('each-loop-mount')
    }
    ctrl.onupdate = (vnode) => {
      console.timeEnd('each-loop')
    }
  },
  view: (vnode) => {
    console.time('each-loop')
    var ctrl = vnode.state
    return (
      m('div', {oncreate: ctrl.oncreate, onupdate: ctrl.onupdate}, [
        m('h1', 'Each Loop test'),
        m('button', {onclick: ctrl.addItem}, 'add item'),
        m('button', {onclick: ctrl.refresh}, 'refresh'),
        ctrl.items.map((item) =>
          m('div', [
            m(Item, {value: item.value}),
            ' ',
            m('button', {onclick: ctrl.removeItem(item)}, 'remove')
          ])
        )
      ])
    )
  }
}
