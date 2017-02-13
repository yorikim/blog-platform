import React from 'react'
import {bind} from 'lodash/functions'

const Like = (props) => {
  return (
    <button onClick={props.handleLike}>Like {props.likes}</button>
  )
}

Like.PropTypes = {
  likes: React.PropTypes.number,
  handleLike: React.PropTypes.func
}

export default Like;