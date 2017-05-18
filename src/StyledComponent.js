/*
 * Typed styles for react
 * Created by Denis Kabana (github.com/leonapoleon)
 * CSS properties from: https://www.w3schools.com/cssref/
 * Last updated: 05/2017 (CSS3)
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import TStyles from './config/TStyles'

export default class StyleWrapper extends Component {
  static propTypes = {
    ...TStyles
  }

  static defaultProps = {
    display: 'block',
    boxSizing: 'border-box',
  }

  render () {
    return <div style={{...this.props}}>{this.props.children}</div>
  }
}