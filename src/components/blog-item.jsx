import React from 'react';
import Image from './image';
import TextBox from './text-box';
import MetaInfo from './meta-info';

const BlogItem = (props) => (
  <article className="post">
    <header className="entry-header">
      <Image width="100px" height="100px" {...props.image} />
    </header>
    <TextBox text={props.text} />
    <MetaInfo {...props.meta} handleLike={props.handleLike}/>
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