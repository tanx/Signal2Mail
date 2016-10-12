import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageScreen from '../message/MessageScreen'

import data from '../../dummy-data'

class MessageListScreen extends Component {
  render () {
    return (
      <MessageList messages={data.messages} openMessage={this._openMessageScreen.bind(this)} />
    )
  }

  _openMessageScreen (msg) {
    this.props.navigator.push({
      component: MessageScreen,
      passProps: { msg }
    })
  }
}

export default MessageListScreen
