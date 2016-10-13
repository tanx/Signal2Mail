import React, { Component } from 'react'
import MessageList from './MessageList'

import data from '../../dummy-data'

class MessageListScreen extends Component {

  render () {
    return (
      <MessageList messages={data.messages} openMessage={this.props.openMessage} />
    )
  }

}

export default MessageListScreen
