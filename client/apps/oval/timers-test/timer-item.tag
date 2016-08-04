<timer-item id={tag.props.item.id}>
  <script>
    var item = tag.props.item
    item.intervalID = setInterval(function () {
      item.value = Math.random() * 100
      tag.update()
    }, Math.random() * 10)
    tag.on('updated', tag.props.onupdated)
  </script>
  <div>{tag.props.item.id} - {tag.props.item.value}</div>
</timer-item>
