import React from 'react';
import Image from './image';
import TextBox from './text-box';
import MetaInfo from './meta-info';
import {Link} from 'react-router';

import {postsPath} from 'helpers/routes'

const BlogItem = ({item, handleLike}) => (
  <article className="post">
    <header className="entry-header">
      <Image width="100px" height="100px" {...item.image} />
    </header>
    <Link to={postsPath(item.id)}>
      <TextBox text={item.text} />
    </Link>
    <MetaInfo {...item.meta} handleLike={handleLike}/>
  </article>
);

BlogItem.propTypes = {
  id: React.PropTypes.number,
  image: React.PropTypes.object,
  text: React.PropTypes.string,
  meta: React.PropTypes.object,
  handleLike: React.PropTypes.func
};

export default BlogItem;