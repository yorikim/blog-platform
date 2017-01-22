import React from 'react'
import Image from './image'
import TextBox from './text-box'

const BlogItem = (props) => (
  <div>
    <Image width="100px" height="100px" {...props.image} />
    <TextBox text={props.text} />
  </div>
)

export default BlogItem