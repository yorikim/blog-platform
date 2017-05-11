import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import BlogItem from '../widgets/blog-item';
import { server } from '../../constants/settings';

const Post = ({ item }) => (
  <div>
    {item && <BlogItem item={item} />}
    {item && <Helmet title={item.title} />}
  </div>
);

Post.propTypes = {
  item: PropTypes.object.isRequired
};

export default Post;
