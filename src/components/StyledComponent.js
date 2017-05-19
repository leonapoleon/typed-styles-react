/*
 * Typed styles for react
 * Created by Denis Kabana (github.com/leonapoleon)
 * CSS properties from: https://www.w3schools.com/cssref/
 * Last updated: 05/2017 (CSS3)
 */

import React, {Component} from 'react'
//import PropTypes from 'prop-types'
import TStyles from 'config/TStyles'

export default class StyledComponent extends Component {
  /*
  static propTypes = {
    ...TStyles
  }

  static defaultProps = {
    display: 'block',
    boxSizing: 'border-box',
  }
  */

  /*
   * TODO: Add styled component as an option to StyleWrapper. Rename them to Style
   */

  render () {
    const {children, ...otherProps} = this.props

    return children && children.length > 1
      ? <div>
        {React.Children.map(
          children,
          child => React.cloneElement(child, {...otherProps}),
        )}
      </div>
      : React.cloneElement(children, {...otherProps})
  }
}