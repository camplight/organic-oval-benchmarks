require('cell')({
  engine: 'ractive',
  requireTags: function () {
    return [ require('./landing-view') ]
  }
})
