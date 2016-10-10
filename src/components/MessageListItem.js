import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Text } from 'native-base'

const MessageListItem = ({ msg, openMessage }) => (
  <TouchableHighlight underlayColor={'#DADADA'} onPress={openMessage.bind(this, msg)}>
    <View style={styles.listItem}>
      <Text style={styles.from}>
        {msg.from.map(i => i.name || i.address).join(', ')}
      </Text>
      <Text style={styles.subject}>
        {msg.subject}
      </Text>
      <Text style={styles.body}>
        {msg.body && msg.body.length > 100 ? (msg.body.substr(0, 93) + '...') : msg.body}
      </Text>
    </View>
  </TouchableHighlight>
)

const styles = StyleSheet.create({
  listItem: {
    paddingTop: 7,
    paddingBottom: 7,
    paddingRight: 15,
    marginLeft: 25,
    borderBottomWidth: 0.5,
    borderColor: '#ddd'
  },
  from: {
    fontWeight: 'bold'
  },
  subject: {
  },
  body: {
    color: 'grey'
  }
})

export default MessageListItem
