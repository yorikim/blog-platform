import React from 'react'
import BlogList from './blog-list'
import {items} from 'constants/blogItems'
import Immutable from 'immutable'

class BlogPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: Immutable.fromJS(items)
    };
  }

  handleLike(itemId) {
    const {items} = this.state;
    const index = items.findIndex((item) => {
      return item.get('id') == itemId
    });

    this.setState({
      items: items.update(index,
        (item) => {
          return item.setIn(['meta', 'likes'], (item.getIn(['meta', 'likes']) || 0) + 1);
        }
      )
    })
  }

  render() {
    const {items} = this.state;

    return (
      <BlogList items={items.toJS()} handleLike={this.handleLike.bind(this)}/>
    )
  }
}

export default BlogPage