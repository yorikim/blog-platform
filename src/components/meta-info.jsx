import React from 'react'
import {formatDate} from '../helpers/dateHelper'
import Like from './like'

const MetaInfo = (props) => {
  return (
    <ul>
      <li>
        <p>Author: {props.author}</p>
        <p>Created At: {formatDate(props.createdAt)}</p>
        <p>Updated At: {formatDate(props.updatedAt)}</p>
        <Like likes={props.likes} />
      </li>
    </ul>
  )
}

export default MetaInfo