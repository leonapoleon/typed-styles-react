/**
 * Return a function that returns an object of properties.
 * @param {Object} T - Validators
 */
export default (T) => ({
  color: T.string, // Sets the color of text
  opacity: T.number, // Sets the opacity level for an element
})