/*
 * Custom validation functions
 */

// Custom error handler (shorter)
function exit ({props, propName, componentName}) {
  return new Error(`Invalid prop ${propName} of type ${typeof props[propName]} supplied to ${componentName}. Kurva.`)
}

// Regex
export function regex (query) {
  return function (props, propName, componentName) {
    return new RegExp(query).test(props[propName]) || exit(arguments)
  }
}

// Unit types
export function unit (units) {
  let query
  if (Array.isArray(units)) {
    query = `[${units.join('|')}]$`
  } else if (typeof units === 'string') {
    query = units
  } else {
    return () => exit(arguments)
  }

  return regex(query)
}