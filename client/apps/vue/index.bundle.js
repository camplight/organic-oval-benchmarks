require('cell')({
  engine: 'vue',
  requireTags: function () {
    var components = {}
    components['landing-view'] = require('./landing-view')
    return components
  }
})
