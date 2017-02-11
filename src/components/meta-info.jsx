import React from 'react'
import {formatDate} from '../helpers/dateHelper'

const MetaInfo = (props) => {
  return (
    <ul>
      <li>
        <p>Author: {props.author}</p>
        <p>Created At: {formatDate(props.createdAt)}</p>
        <p>Updated At: {formatDate(props.updatedAt)}</p>
      </li>
    </ul>
  )
}

export default MetaInfo