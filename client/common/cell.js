module.exports = function (options) {
  var Plasma = require('organic-plasma')

  window.plasma = new Plasma()

  window.plasma.organelles = []

  if (options.buildOrgenelles) {
    window.plasma.organelles = window.plasma.organelles.concat(options.buildOrgenelles(window.plasma))
  }

  require('domready')(function () {
    options.requireTags()
    if (options.engine === 'oval') {
      // provide plasma
      oval.init(window.plasma)

      if (options.beforeMount) {
        options.beforeMount(window.plasma, function () {
          oval.mountAll('*', window.document)
        })
      } else {
        oval.mountAll('*', window.document)
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
  })
}
