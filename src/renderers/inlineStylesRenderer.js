import prefixCss from 'functions/prefixCss'


/*
 * TODO: Update StyleProvider to get rid of _renderingInline
 * Instead destructurize an array returned from renderer function
 */

export default function inlineStylesRenderer (config) {
  return function (styles) {
    return config._renderingInline && (
      config.autoprefix
        ? prefixCss(styles)
        : styles
    )
  }
}