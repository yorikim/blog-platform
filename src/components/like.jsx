import React from 'react'
import {bind} from 'lodash/functions'
import {Button} from 'react-bootstrap'

const Like = (props) => {
  return (
    <Button bsStyle="success" bsSize="xsmall" onClick={props.handleLike}>Like {props.likes}</Button>
  )
}

Like.PropTypes = {
  likes: React.PropTypes.number,
  handleLike: React.PropTypes.func
}

export default Like;