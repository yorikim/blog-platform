import React from 'react'

const TextBox = (props) => (
  <span>{props.text}</span>
)

TextBox.PropTypes = {
  text: React.PropTypes.string
}

export default TextBox