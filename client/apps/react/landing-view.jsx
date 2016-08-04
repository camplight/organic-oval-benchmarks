// main.js
var React = require('react')
var ReactDOM = require('react-dom')
var EachLoopTest = require('./each-loop-test')
var TimersTest = require('./timers-test')

if (document.getElementById('landing-view')) {
  ReactDOM.render(
    <EachLoopTest></EachLoopTest>,
    document.getElementById('landing-view')
  )
}
if (document.getElementById('timers-test')) {
  ReactDOM.render(
    <TimersTest></TimersTest>,
    document.getElementById('timers-test')
  )
}
