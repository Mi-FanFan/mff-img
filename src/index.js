import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class Img extends Component {
  constructor(props) {
    super(props)
    this.state = {
      src: props.defaultUrl,
    }
  }

  componentDidMount() {
    const { src } = this.props

    this.img.onload = () => {
      this.setState({
        src,
      })
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { src } = this.state
    return src !== nextState.src
  }

  render() {
    const { src } = this.state

    const {
      alt,
      title,
      style,
      className,
      ...props
    } = this.props

    const extraProps = Object.assign({}, props)

    delete extraProps.defaultUrl

    return (
      <img
        src={src}
        alt={alt}
        style={style}
        title={title}
        className={className}
        ref={img => this.img = img}
        {...extraProps}
      />
    )
  }
}

Img.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
  defaultUrl: PropTypes.string,
}

Img.defaultProps = {
  src: '',
  style: {},
  alt: 'img',
  title: 'img',
  className: '',
  defaultUrl: '//cdn.mifanxing.com/mifan/img/default-product.jpg',
}
