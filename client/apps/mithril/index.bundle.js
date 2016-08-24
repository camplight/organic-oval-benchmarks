window.mithril = require('mithril')

require('cell')({
  engine: 'mithril',
  requireTags: function () {
    require('./landing-view')
  }
})
