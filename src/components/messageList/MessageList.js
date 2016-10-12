import React, { Component } from 'react'
import { ListView } from 'react-native'
import MessageListItem from './MessageListItem'

class MessageList extends Component {
  constructor (props) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      messagesDataSource: ds.cloneWithRows(props.messages)
    }
  }

  render () {
    return (
      <ListView
        dataSource={this.state.messagesDataSource}
        renderRow={msg => <MessageListItem msg={msg} openMessage={this.props.openMessage} />} />
    )
  }
}

export default MessageList
