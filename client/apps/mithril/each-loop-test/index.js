
var m = window.mithril
var Item = require('./item')

module.exports = {
  controller: function () {
    console.time('each-loop-mount')

    var ctrl = {}
    ctrl.items = []
    for (var i = 0; i < 10000; i++) {
      ctrl.items.push({value: i, id: Math.random()})
    }

    ctrl.addItem = () => {
      ctrl.items.push({value: ctrl.items.length, id: Math.random()})
    }
    ctrl.refresh = () => {
      m.startComputation()
      m.endComputation()
    }
    ctrl.removeItem = (item) => () => {
      ctrl.items.splice(ctrl.items.indexOf(item), 1)
    }

    ctrl.config = (el, init, ctx) => {
      if (!init) {
        console.timeEnd('each-loop-mount')
      }
      console.timeEnd('each-loop')
    }

    return ctrl
  },
  view: (ctrl) => {
    console.time('each-loop')
    return (
      m('div', {config: ctrl.config}, [
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
