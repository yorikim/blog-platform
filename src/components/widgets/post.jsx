import React, {PropTypes} from 'react';
import BlogItem from './blog-item';
import {items} from 'constants/blogItems';
import Immutable from 'immutable';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {item: Immutable.fromJS(items[props.params.id - 1])};
  }

  handleLike() {
    const item = this.state.item;
    this.setState({
      item: item.updateIn(['meta', 'likes'], (value = 0) => value + 1)
    });
  }

  render() {
    return (
      <BlogItem item={this.state.item.toJS()} handleLike={this.handleLike.bind(this)}/>
    );
  }

}

Post.propTypes = {
  params: PropTypes.object
};

Post.defaultProps = {
  meta: {
    likes: 0
  }
};

export default Post;
