require('cell')({
  protected: false,
  engine: 'oval',
  requireTags: function () {
    require('./landing-view')
  }
})
