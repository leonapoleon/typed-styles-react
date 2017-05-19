import React from 'react'
import ReactDOM from 'react-dom'

import {StyleProvider, StyleWrapper, inlineStylesRenderer} from 'entry'

const style = {
  borderRadius: 4,
  display: 'inline-flex',
  flex: '0 1 auto',
  backgroundColor: 'pink',
  padding: '8px 14px',
}

ReactDOM.render(
  <StyleProvider
    styleRenderer={inlineStylesRenderer}
  >
    <h1>typed-styles-react</h1>
    <StyleWrapper style={style}>I am a demonstration of styles</StyleWrapper>
  </StyleProvider>,
  document.getElementById('test')
)