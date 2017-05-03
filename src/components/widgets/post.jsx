import React, { PropTypes } from 'react';
import BlogItem from './blog-item';
import { server } from 'constants/settings';

const Post = ({ item }) => (
  item && <BlogItem item={item} />
);

Post.propTypes = {
  item: PropTypes.object.isRequred
};

export default Post;
