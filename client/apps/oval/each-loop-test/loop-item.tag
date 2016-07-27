<loop-item>
  <script>
    var rendered = false
    tag.items = [1, 2, 3]
    tag.shouldRender = function () {
      return !rendered
    }
    tag.on('updated', function () {
      rendered = true
    })
  </script>
  <div>{tag.value}</div>
  <each m in {tag.items}>
    <span>{m}</span>
  </each>
</loop-item>
