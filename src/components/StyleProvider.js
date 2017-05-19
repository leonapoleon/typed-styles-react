import React, {Component} from 'react'
import {object, func} from 'prop-types'

const defaultConfig = {
  renderInlineStyles: false,
  autoprefix: true,
}

export default class StyleProvider extends Component {
  static childContextTypes = {
    styleRenderer: object,
    styleTheme: object,
  }

  static propTypes = {
    styleTheme: object,
    styleRenderer: func,
    config: object,
  }

  getChildContext () {
    const {styleRenderer, styleTheme, config} = this.props

    const styleRendererObject = {
      generateInlineStyles: styleRenderer({...defaultConfig, ...config, _renderingInline: true}),
      generateClassName: styleRenderer({...defaultConfig, ...config, _renderingInline: false}),
    }

    return {
      styleRenderer: styleRendererObject,
      styleTheme,
    }
  }

  render () {
    const {children} = this.props

    return children.length > 1
      ? <div>{children}</div>
      : {children} || null
  }
}