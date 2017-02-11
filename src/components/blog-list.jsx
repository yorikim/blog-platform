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

BlogList.propTypes = {
  items: React.PropTypes.array
}

export default BlogList