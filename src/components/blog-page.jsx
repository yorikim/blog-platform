import React from 'react'
import BlogList from './blog-list'
import {items} from '../constants/blogItems'

const BlogPage = (props) => (
  <BlogList items={items}/>
)

export default BlogPage