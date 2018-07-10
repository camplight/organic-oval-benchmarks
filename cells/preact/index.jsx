import { h, render } from 'preact'
const Loop = require('./components/loop')
let root = render(<div id="app"><Loop /></div>, document.body, root)
