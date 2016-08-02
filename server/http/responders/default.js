module.exports = function (app, dna) {
  // default not found handler
  app.use(function (req, res, next) {
    res.status(404)
    res.end()
  })
  // default error handler
  app.use(function (err, req, res, next) {
    console.error('HTTP', err.stack)
    res.status(500)
    res.end()
  })
}
