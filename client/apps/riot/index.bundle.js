window.riot = require('riot')

require('cell')({
  engine: 'riot',
  requireTags: function () {
    require('./landing-view')
  }
})
