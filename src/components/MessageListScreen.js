import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageScreen from './MessageScreen'

import data from '../dummy-data'

class MessageListScreen extends Component {
  render () {
    return (
      <MessageList messages={data.messages} openMessage={this._openMessageScreen.bind(this)} />
    )
  }

  _openMessageScreen (msg) {
    this.props.navigator.push({
      component: MessageScreen,
      title: msg.from.map(i => i.name || i.address).join(', '),
      passProps: { msg }
    })
  }
}

export default MessageListScreen
