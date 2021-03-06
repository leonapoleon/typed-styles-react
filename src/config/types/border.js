/**
 * Return a function that returns an object of properties.
 * @param {Object} T - Validators
 */

const borderStyles = [
  'none',
  'hidden',
  'dotted',
  'dashed',
  'solid',
  'double',
  'groove',
  'ridge',
  'inset',
  'outset',
  'initial',
  'inherit',
]

export default (T) => {
  const TStyleNum = T.oneOfType([
    T.number,
    T.string
  ])

  return {
    border: T.string, // Sets all the border properties in one declaration
    borderBottom: T.string, // Sets all the bottom border properties in one declaration
    borderBottomColor: T.string, // Sets the color of the bottom border
    borderBottomLeftRadius: TStyleNum, // Defines the shape of the border of the bottom-left corner
    borderBottomRightRadius: TStyleNum, // Defines the shape of the border of the bottom-right corner
    borderBottomStyle: T.oneOf(borderStyles), // Sets the style of the bottom border
    borderBottomWidth: TStyleNum, // Sets the width of the bottom border
    borderColor: T.string, // Sets the color of the four borders
    borderImage: T.string, // A shorthand property for setting all the border-image-* properties
    borderImageOutset: TStyleNum, // Specifies the amount by which the border image area extends beyond the border box
    borderImageRepeat: T.string, // Specifies whether the border image should be repeated, rounded or stretched
    borderImageSlice: T.string, // Specifies how to slice the border image
    borderImageSource: T.string, // Specifies the path to the image to be used as a border
    borderImageWidth: TStyleNum, // Specifies the widths of the image-border
    borderLeft: T.string, // Sets all the left border properties in one declaration
    borderLeftColor: T.string, // Sets the color of the left border
    borderLeftStyle: T.oneOf(borderStyles), // Sets the style of the left border
    borderLeftWidth: TStyleNum, // Sets the width of the left border
    borderRadius: TStyleNum, // A shorthand property for setting all the four border-*-radius properties
    borderRight: T.string, // Sets all the right border properties in one declaration
    borderRightColor: T.string, // Sets the color of the right border
    borderRightStyle: T.oneOf(borderStyles), // Sets the style of the right border
    borderRightWidth: TStyleNum, // Sets the width of the right border
    borderStyle: T.oneOf(borderStyles), // Sets the style of the four borders
    borderTop: T.string, // Sets all the top border properties in one declaration
    borderTopColor: T.string, // Sets the color of the top border
    borderTopLeftRadius: TStyleNum, // Defines the shape of the top of the bottom-left corner
    borderTopRightRadius: TStyleNum, // Defines the shape of the top of the bottom-right corner
    borderTopStyle: T.oneOf(borderStyles), // Sets the style of the top border
    borderTopWidth: TStyleNum, // Sets the width of the top border
    borderWidth: TStyleNum, // Sets the width of the four borders
    boxShadow: T.oneOfType([
      T.string,
      T.arrayOf(T.string),
    ]), // Attaches one or more drop-shadows to the box
  }
}