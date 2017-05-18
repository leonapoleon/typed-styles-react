/**
 * Return a function that returns an object of properties.
 * @param {Object} T - Validators
 */
export default (T) => ({
  backgroundAttachment: T.oneOf([
    'scroll', // default
    'fixed',
    'local',
    'initial',
    'inherit',
  ]), // Specifies the position of a background image
  backgroundBlendMode: T.oneOf([
    'normal', // default
    'multiply',
    'screen',
    'overlay',
    'darken',
    'lighten',
    'color-dodge',
    'saturation',
    'color',
    'luminosity',
  ]), // Specifies the blending mode of each background layer (color/image)
  backgroundColor: T.string, // Specifies the background color of an element
  backgroundImage: T.string, // Specifies one or more background images for an element
  backgroundPosition: T.string, // Specifies the position of a background image
  backgroundRepeat: T.oneOf([
    'repeat',
    'repeat-x',
    'repeat-y',
    'no-repeat',
    'initial',
    'inherit',
  ]), // Sets how a background image will be repeated
  backgroundClip: T.oneOf([
    'border-box',
    'padding-box',
    'content-box',
    'initial',
    'inherit',
  ]), // Specifies the painting area of the background
  backgroundOrigin: T.oneOf([
    'border-box',
    'padding-box',
    'content-box',
    'initial',
    'inherit',
  ]), // Specifies where the background image(s) is/are positioned
  backgroundSize: T.string, // Specifies the size of the background image(s)
})