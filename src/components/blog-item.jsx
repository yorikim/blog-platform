import React from 'react'
import Image from './image'
import TextBox from './text-box'
import MetaInfo from './meta-info'

const BlogItem = (props) => (
  <div>
    <Image width="100px" height="100px" {...props.image} />
    <TextBox text={props.text} />
    <MetaInfo {...props.meta} />
  </div>
)

export default BlogItem