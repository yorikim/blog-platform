import React, {PropTypes} from 'react';
import BlogItem from './blog-item';
import Immutable from 'immutable';
import request from 'superagent';
import {server} from 'constants/settings';

class Post extends React.Component {
  constructor(props) {
    super(props);

    this.state = {item: Immutable.fromJS({})};
  }

  componentDidMount() {
    this.fetchPost();
  }

  fetchPost() {
    request.get(
      `${server}/posts/${this.props.id}`,
      {},
      (err, resp) => this.setState({item: Immutable.Map(resp.body)})
    );
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
