import React from 'react'
import BlogItem from './blog-item'
import _ from 'lodash'

const BlogList = (props) => {
  const list = _.map(props.items, (item) => {
    return <BlogItem key={item.id} {...item} handleLike={() => {props.handleLike(item.id)}}/>
  })

  return (
    <ul>
      {list}
    </ul>
  )
}

BlogList.propTypes = {
  items: React.PropTypes.array,
  handleLike: React.PropTypes.func
}

export default BlogList