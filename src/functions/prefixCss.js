import Prefixer from 'inline-style-prefixer'

export default function prefixCss (css) {
  const prefixAllStyles = new Prefixer()
  return prefixAllStyles.prefix(css)
}