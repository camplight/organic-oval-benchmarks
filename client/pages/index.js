module.exports = function (plasma, dna, helpers) {
  return {
    '* *': helpers.locals(plasma, dna, helpers)
  }
}
