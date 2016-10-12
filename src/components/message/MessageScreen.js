import React from 'react'
import { ScrollView } from 'react-native'
import Message from './Message'

const MessageScreen = ({ msg }) => (
  <ScrollView>
    <Message msg={msg} />
  </ScrollView>
)

export default MessageScreen
