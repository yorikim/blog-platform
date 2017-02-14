import React from 'react'
import {formatDate} from 'helpers/dateHelper'
import Like from './like'

const MetaInfo = (props) => {
  return (
    <p className="entry-meta">
      <span>Posted on: </span><span className="entry-date">{formatDate(props.createdAt)}</span>
      <span> | By </span><span className="entry-author">{props.author}</span>
      <span> | Updated: </span><span className="entry-date">{formatDate(props.updatedAt)}</span>
      <br/>
      <Like likes={props.likes} handleLike={props.handleLike}/>
    </p>
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