import React, { Component } from 'react'
import { render } from 'react-dom'

import A from '../src'

class App extends Component {
  render() {
    return <A src="//cdn.mifanxing.com/mifan/img/mobile-banner.jpg" className="sdf" style={{width: '100%'}} />
  }
}




render(<App />, document.getElementById('root'))
