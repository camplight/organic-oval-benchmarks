<timers-test>
  <script>
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
    for (var i = 0; i < 5000; i++) {
      tag.items.push(createItem(i))
    }
    tag.captureUpdateStats = function () {
      count += 1
    }
    console.time('time')
    var intervalID = setInterval(function () {
      console.log('updated per')
      console.timeEnd('time')
      console.log('count', count)
      count = 0
      console.time('time')
    }, 1000)
  </script>
  <each item, index in {tag.items}>
    <timer-item prop-item={item} prop-onupdated={tag.captureUpdateStats}/>
  </each>
</timers-test>
