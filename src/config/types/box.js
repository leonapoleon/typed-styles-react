/**
 * Return a function that returns an object of properties.
 * @param {Object} T - Validators
 */

const overflowTypes = [
  'visible',
  'hidden',
  'scroll',
  'auto',
  'initial',
  'inherit',
]

export default (T) => {
  const TStyleNum = T.oneOfType([
    T.number,
    T.string
  ])

  return {
    bottom: TStyleNum, // Specifies the bottom position of a positioned element
    clear: T.oneOf([
      'none',
      'left',
      'right',
      'both',
      'initial',
      'inherit',
    ]), // Specifies which sides of an element where other floating elements are not allowed
    clip: T.string, // Clips an absolutely positioned element
    display: T.oneOf([
      'inline',
      'block',
      'flex',
      'inline-block',
      'inline-flex',
      'inline-table',
      'list-item',
      'run-in',
      'table',
      'table-caption',
      'table-column-group',
      'table-header-group',
      'table-footer-group',
      'table-row-group',
      'table-cell',
      'table-column',
      'table-row',
      'none',
      'initial',
      'inherit',
    ]), // Specifies how a certain HTML element should be displayed
    float: T.oneOf([
      'none',
      'left',
      'right',
      'initial',
      'inherit',
    ]), // Specifies whether or not a box should float
    height: TStyleNum, // Sets the height of an element
    left: TStyleNum, // Specifies the left position of a positioned element
    margin: TStyleNum, // Sets all the margin properties in one declaration
    marginBottom: TStyleNum, // Sets the bottom margin of an element
    marginLeft: TStyleNum, // Sets the left margin of an element
    marginRight: TStyleNum, // Sets the right margin of an element
    marginTop: TStyleNum, // Sets the top margin of an element
    maxHeight: TStyleNum, // Sets the maximum height of an element
    maxWidth: TStyleNum, // Sets the maximum width of an element
    minHeight: TStyleNum, // Sets the minimum height of an element
    minWidth: TStyleNum, // Sets the minimum width of an element
    overflow: T.oneOf(overflowTypes), // Specifies what happens if content overflows an element's box
    overflowX: T.oneOf(overflowTypes), // Specifies whether or not to clip the left/right edges of the content, if it overflows the element's content area
    overflowY: T.oneOf(overflowTypes), // Specifies whether or not to clip the top/bottom edges of the content, if it overflows the element's content area
    padding: TStyleNum, // Sets all the padding properties in one declaration
    paddingBottom: TStyleNum, // Sets the bottom padding of an element
    paddingLeft: TStyleNum, // Sets the left padding of an element
    paddingRight: TStyleNum, // Sets the right padding of an element
    paddingTop: TStyleNum, // Sets the top padding of an element
    position: T.oneOf([
      'static',
      'relative',
      'absolute',
      'fixed',
    ]), // 	Specifies the type of positioning method used for an element
    right: TStyleNum, // Specifies the right position of a positioned element
    top: TStyleNum, // Specifies the top position of a positioned element
    visibility: T.oneOf([
      'visible',
      'hidden',
      'collapse',
      'initial',
      'inherit',
    ]), // Specifies whether or not an element is visible
    width: TStyleNum, // Sets the width of an element
    verticalAlign: T.oneOf([
      'baseline',
      'length',
      'sub',
      'super',
      'top',
      'text-top',
      'middle',
      'bottom',
      'text-bottom',
      'initial',
      'inherit',
    ]), // Sets the vertical alignment of an element
    zIndex: T.number, // Sets the stack order of a positioned element
  }
}