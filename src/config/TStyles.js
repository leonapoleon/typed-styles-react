/*
 * Return a complete PropTypes object for all styles
 */
import PropTypes from 'prop-types'
import * as customTypes from './customValidators'
import * as TStyleTypes from './types'

const validators = {
  ...PropTypes,
  ...customTypes, // Spread these last to override PropTypes
}

let TStyles = {}
// Spread all Type objects with validators
Object.keys(TStyleTypes).forEach(
  TypesGenerator => {
    TStyles = {
      ...TStyles,
      ...TStyleTypes[TypesGenerator](validators)
    }
  }
)

export default TStyles