import React from 'react'
import BlogList from './blog-list'

let items = [
  {
    text: 'Test1',
    image: {
      src: "http://static.jsbin.com/images/dave.min.svg",
      alt: 'Test1'
    }
  },
  {
    text: 'Test2',
    image: {
      src: "http://static.jsbin.com/images/dave.min.svg",
      alt: 'Test2'
    }
  }
]

const BlogPage = (props) => (
  <BlogList items={items}/>
)

export default BlogPage