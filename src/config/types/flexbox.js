/**
 * Return a function that returns an object of properties.
 * @param {Object} T - Validators
 */
export default (T) => ({
  alignContent: T.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'space-between',
    'space-around',
    'initial',
    'inherit',
  ]), // Specifies the alignment between the lines inside a flexible container when the items do not use all available space
  alignItems: T.oneOf([
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit',
  ]), // Specifies the alignment for items inside a flexible container
  alignSelf: T.oneOf([
    'auto',
    'stretch',
    'center',
    'flex-start',
    'flex-end',
    'baseline',
    'initial',
    'inherit',
  ]), // Specifies the alignment for selected items inside a flexible container
  flex: T.string, // Specifies the length of the item, relative to the rest
  flexBasis: T.oneOfType([
    T.unit(['px', '%']),
    T.oneOf(['auto, initial, inherit']),
  ]), // Specifies the initial length of a flexible item
  flexDirection: T.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse',
    'initial',
    'inherit',
  ]), // Specifies the direction of the flexible items
  flexGrow: T.oneOfType([
    T.number,
    T.oneOf(['initial', 'inherit']),
  ]), // Specifies how much the item will grow relative to the rest
  flexShrink: T.oneOfType([
    T.number,
    T.oneOf(['initial', 'inherit']),
  ]), // Specifies how the item will shrink relative to the rest
  flexWrap: T.oneOf([
    'nowrap',
    'wrap',
    'wrap-reverse',
    'initial',
    'inherit',
  ]), // Specifies whether the flexible items should wrap or not
  justifyContent: T.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'initial',
    'inherit',
  ]), // Specifies the alignment between the items inside a flexible container when the items do not use all available space
  order: T.oneOfType([
    T.number,
    T.oneOf(['initial', 'inherit']),
  ]), // Sets the order of the flexible item, relative to the rest
})