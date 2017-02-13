import React from 'react'
import {formatDate} from 'helpers/dateHelper'
import Like from './like'

const MetaInfo = (props) => {
  return (
    <ul>
      <li>
        <p>Author: {props.author}</p>
        <p>Created At: {formatDate(props.createdAt)}</p>
        <p>Updated At: {formatDate(props.updatedAt)}</p>
        <Like likes={props.likes} handleLike={props.handleLike} />
      </li>
    </ul>
  )
}

MetaInfo.PropTypes = {
  author: React.PropTypes.string,
  createdAt: React.PropTypes.instanceOf(Date),
  updatedAt: React.PropTypes.instanceOf(Date),
  likes: React.PropTypes.number,
  handleLike: React.PropTypes.func
}

MetaInfo.defaultProps = {
  author: 'guest',
  likes: 0
}

export default MetaInfo