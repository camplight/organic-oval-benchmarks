require('cell')({
  protected: false,
  engine: 'riot',
  requireTags: function () {
    require('./landing-view')
  }
})
