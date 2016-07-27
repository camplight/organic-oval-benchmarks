var React = require('react')

module.exports = React.createClass({
  propTypes: {
    value: React.PropTypes.number
  },

  getInitialState: function () {
    return {
      subitems: [1, 2, 3],
      rendered: false
    }
  },

  shouldComponentUpdate: function () {
    return !this.state.rendered
  },

  render: function() {
    this.state.rendered = true
    return (
      <div>
        {this.props.value}
        {
          this.state.subitems.map(function (i) {
            return <span key={i}>{i}</span>
          })
        }
      </div>
    )
  }

})
