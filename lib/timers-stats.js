var testCount = 0
var count = 0
var startTime
var endTime
var buffer = []

module.exports.capture = function () {
  count += 1
}

module.exports.init = function (amount) {
  startTime = window.performance.now()
  var intervalID = setInterval(function () {
    endTime = window.performance.now()
    var time = endTime - startTime
    testCount += 1
    buffer.push({count: count, time: time})
    count = 0
    startTime = window.performance.now()
    if (testCount === amount) {
      testCount = 0
      var countSum = 0
      var timeSum = 0
      for (var i = 0; i < buffer.length; i++) {
        countSum += buffer[i].count
        timeSum += buffer[i].time
      }
      var avgCount = countSum / amount
      var avgTime = timeSum / amount
      var rate = avgCount / avgTime
      console.info('avg updates', avgCount, 'avg time', avgTime, 'rate', rate)
    }
  }, 1000)
}
