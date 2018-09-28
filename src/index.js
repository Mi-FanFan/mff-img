import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: props.defaultUrl,
    }
  }

  componentDidMount() {
    const { url } = this.props

    this.img.onload = () => {
      this.setState({
        url,
      })
    }
  }

  render() {
    const { url } = this.state

    const {
      alt,
      title,
      style,
      className,
    } = this.props

    return (
      <img
        src={url}
        alt={alt}
        style={style}
        title={title}
        className={className}
        ref={img => this.img = img}
      />
    )
  }
}

App.propTypes = {
  alt: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  defaultUrl: PropTypes.string,
}

App.defaultProps = {
  style: {},
  alt: 'img',
  title: 'img',
  className: '',
  defaultUrl: '//cdn.mifanxing.com/mifan/img/default-product.jpg',
}
