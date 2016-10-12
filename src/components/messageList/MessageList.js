import React from 'react'
import { List } from 'native-base'
import MessageListItem from './MessageListItem'

const MessageList = ({ messages, openMessage }) => (
  <List
    dataArray={messages}
    renderRow={msg => <MessageListItem msg={msg} openMessage={openMessage} />}
  />
)

export default MessageList
