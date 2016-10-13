import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text, Block } from '../widgets'

const Message = ({ msg }) => (
  <View>
    <Block seperator>
      <Text style={styles.from}>{msg.from.map(i => i.name || i.address).join(', ')}</Text>
      <Text>To: {msg.to.map(i => i.name || i.address).join(', ')}</Text>
    </Block>
    <Block seperator>
      <Text style={styles.subject}>{msg.subject}</Text>
    </Block>
    <Block>
      <Text>{msg.body}</Text>
    </Block>
  </View>
)

const styles = StyleSheet.create({
  from: {
    fontWeight: 'bold'
  },
  subject: {
    fontWeight: 'bold'
  }
})

export default Message
