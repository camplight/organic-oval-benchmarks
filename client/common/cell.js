module.exports = function (options) {
  var _ = require('lodash')
  var Plasma = require('organic-plasma')

  window.plasma = new Plasma()

  window.plasma.organelles = []

  if (options.buildOrgenelles) {
    window.plasma.organelles = window.plasma.organelles.concat(options.buildOrgenelles(window.plasma))
  }

  require('domready')(function () {
    var result = options.requireTags()
    if (options.engine === 'oval') {
      // provide plasma
      oval.init(window.plasma)

      if (options.beforeMount) {
        options.beforeMount(window.plasma, function () {
          oval.mountAll(document.body)
        })
      } else {
        oval.mountAll(document.body)
      }
    }

    if (options.engine === 'riot') {
      if (options.beforeMount) {
        options.beforeMount(window.plasma, function () {
          riot.mount('*')
        })
      } else {
        riot.mount('*')
      }
    }

    if (options.engine === 'vue') {
      new Vue({
        el: 'body',
        components: result
      })
    }

    if (options.engine === 'ractive') {
      var Component = result[0]
      new Component({ el: document.body })
    }
  })
}
