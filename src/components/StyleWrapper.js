/*
 * Typed styles for react
 * Created by Denis Kabana (github.com/leonapoleon)
 * CSS properties from: https://www.w3schools.com/cssref/
 * Last updated: 05/2017 (CSS3)
 */
import React, {Component} from 'react'
import {object, shape} from 'prop-types'
import TStyles from 'config/TStyles'

export default class StyleWrapper extends Component {
  static contextTypes = {
    styleRenderer: object,
  }

  static propTypes = {
    style: shape({...TStyles})
  }

  render () {
    const {styleRenderer} = this.context
    const {style} = this.props

    return (
      <div
        style={styleRenderer.generateInlineStyles(style)}
        className={styleRenderer.generateClassName(style)}
      >
        {this.props.children}
      </div>
    )
  }
}