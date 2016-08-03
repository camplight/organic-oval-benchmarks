window.oval = require('organic-oval')

require('cell')({
  engine: 'oval',
  requireTags: function () {
    require('./landing-view')
    require('./timers-test')
  }
})
