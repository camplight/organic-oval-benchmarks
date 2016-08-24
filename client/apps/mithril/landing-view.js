
var m = require('mithril')
var EachLoopTest = require('./each-loop-test')
var TimersTest = require('./timers-test')

if (document.getElementById('landing-view')) {
  m.mount(document.getElementById('landing-view'), EachLoopTest)
}
if (document.getElementById('timers-test')) {
  m.mount(document.getElementById('timers-test'), TimersTest)
}
