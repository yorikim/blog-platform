import React from 'react'
import {bind} from 'lodash/functions'

class Like extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      likes: props.likes
    }
  }

  handleClick() {
    this.setState({
      likes: this.state.likes + 1
    })
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this)}>Like {this.state.likes}</button>
    )
  }
}

export default Like;