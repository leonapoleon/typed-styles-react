import prefixCss from './renderToCss'

/**
 * Render a javascript object into valid css, prefix it
 */
export default function renderToCss (stylesObject, isPrefixingOn = true) {
  return Object.keys(stylesObject).map(
    property => {
      const propertyName = property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
      const propertyValue = stylesObject[property]

      const cssTemplate = `${propertyName}:${propertyValue};`

      css += isPrefixingOn ? prefixCss(cssTemplate) : cssTemplate
    }
  ).join('')
}