import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { ListItem, Text } from 'native-base'

const MessageListItem = ({ msg, openMessage }) => (
  <ListItem>
    <TouchableOpacity onPress={openMessage.bind(this, msg)}>
      <Text style={styles.from}>
        {msg.from.map(i => i.name || i.address).join(', ')}
      </Text>
      <Text style={styles.subject}>
        {msg.subject}
      </Text>
      <Text style={styles.body}>
        {msg.body && msg.body.length > 100 ? (msg.body.substr(0, 97) + '...') : msg.body}
      </Text>
    </TouchableOpacity>
  </ListItem>
)

const styles = StyleSheet.create({
  from: {
    fontWeight: 'bold'
  },
  subject: {
    marginTop: 2,
    marginBottom: 2
  },
  body: {
    color: 'grey'
  }
})

export default MessageListItem
