import React from 'react'
import { View, Text } from 'react-native'

const MessageScreen = ({ msg }) => (
  <View style={{marginTop: 65}}>
    <Text>{msg.body}</Text>
  </View>
)

export default MessageScreen
