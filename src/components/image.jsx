import React from 'react'

const Image = (props) => (
  <img {...props} className="entry-avatar"/>
)

Image.PropTypes = {
  src: React.PropTypes.string,
  alt: React.PropTypes.string
}

export default Image