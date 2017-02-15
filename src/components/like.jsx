import React from 'react';
import {Button} from 'react-bootstrap';

const Like = (props) => (
  <Button bsStyle="success" bsSize="xsmall" onClick={props.handleLike}>Like {props.likes}</Button>
);

Like.propTypes = {
  likes: React.PropTypes.number,
  handleLike: React.PropTypes.func
};

export default Like;