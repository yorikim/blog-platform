import React from 'react'
import Image from './image'
import TextBox from './text-box'
import MetaInfo from './meta-info'

const BlogItem = (props) => (
  <div>
    <Image width="100px" height="100px" {...props.image} />
    <TextBox text={props.text} />
    <MetaInfo {...props.meta} handleLike={props.handleLike}/>
  </div>
)

BlogItem.propTypes = {
  id: React.PropTypes.number,
  image: React.PropTypes.object,
  text: React.PropTypes.string,
  meta: React.PropTypes.object,
  handleLike: React.PropTypes.func
}

export default BlogItem