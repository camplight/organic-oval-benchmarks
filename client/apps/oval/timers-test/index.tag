<timers-test>
  <script>
    var timerStats = require('timers-stats')
    require('./timer-item')
    tag.items = []
    var count = 0
    var createItem = function (id) {
      var item = {
        id: id,
        value: Math.random() * 100,
        intervalID: null
      }
      return item
    }
    for (var i = 0; i < 2000; i++) {
      tag.items.push(createItem(i))
    }
    tag.captureUpdateStats = function () {
      timerStats.capture()
    }
    timerStats.init(10)
  </script>
  <each item, index in {tag.items}>
    <timer-item prop-item={item} prop-onupdated={tag.captureUpdateStats}/>
  </each>
</timers-test>
