var React = require('react')

module.exports = React.createClass({

  getInitialState: function() {
    return this.props.item
  },

  componentWillMount: function() {
    this.state.intervalID = setInterval(() => {
      this.setState({
        value: Math.random() * 100
      })
    }, Math.random() * 10)
  },

  componentDidUpdate: function() {
    this.props.onupdated()
  },

  render: function() {
    return (
      <div>
        {this.state.id} - {this.state.value}
      </div>
    )
  }

})
