import React from 'react'
import BlogItem from './blog-item'
import _ from 'lodash'

const BlogList = (props) => {
  const list = _.map(props.items, (item, key) => {
    return <BlogItem key={key} {...item} />
  })

  return (
    <ul>
      {list}
    </ul>
  )
}

export default BlogList