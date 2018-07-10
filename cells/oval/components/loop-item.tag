<loop-item>
  <script>
    this.state = {
      items: [1, 2, 3]
    }
  </script>
  <div>
    {this.props.value}
    <each m in {this.state.items}>
      <span>{m}</span>
    </each>
  </div>
</loop-item>
