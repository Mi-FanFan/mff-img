import React, { Component } from 'react'
import { render } from 'react-dom'

import A from '../src'

class App extends Component {
  state = {
    src: '//static.mifanxing.com/article/image/178/75/4960877.jpg?w=320&h=180'
  }
  componentDidMount() {
    setTimeout(() => this.setState({src: "//cdn.mifanxing.com/mifan/img/mobile-banner.jpg"}), 10)
  }
  click = () => {
    console.log('click')
  }
  render() {
    return <A src={this.state.src} className="sdf" style={{width: '100%'}} data-id="3" onClick={this.click}/>
  }
}




render(<App />, document.getElementById('root'))
