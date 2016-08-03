<loop-item>
  <script>
    tag.items = [1, 2, 3]
    tag.on('updated', function () {
      tag.shouldRender = false
    })
  </script>
  <div>
    {tag.props.value}
    <each m in {tag.items}>
      <span>{m}</span>
    </each>
  </div>
</loop-item>
