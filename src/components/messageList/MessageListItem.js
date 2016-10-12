import React from 'react'
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native'
import gStyles from '../styles/global'

const MessageListItem = ({ msg, openMessage }) => (
  <TouchableHighlight underlayColor={'#DADADA'} onPress={openMessage.bind(this, msg)}>
    <View style={[styles.listItem, gStyles.seperator]}>
      <Text style={[gStyles.text, styles.from]}>
        {msg.from.map(i => i.name || i.address).join(', ')}
      </Text>
      <Text style={gStyles.text}>
        {msg.subject}
      </Text>
      <Text style={[gStyles.text, styles.body]}>
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
    marginLeft: 25
  },
  from: {
    fontWeight: 'bold'
  },
  body: {
    color: 'grey'
  }
})

export default MessageListItem
