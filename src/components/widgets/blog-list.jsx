import React from 'react';
import BlogItem from './blog-item';
import { map } from 'lodash/collection';

const BlogList = (props) => {
  const list = map(props.items, (item) =>
    <BlogItem
      key={item.id}
      item={item}
      handleLike={
        () => {
          props.handleLike(item.id);
        }
      }
    />
  );

  return (
    <div>
      {list}
    </div>
  );
};

BlogList.propTypes = {
  items: React.PropTypes.array,
  handleLike: React.PropTypes.func
};

export default BlogList;