import React from 'react'
import { StyleSheet, TouchableHighlight, View } from 'react-native'
import { Text } from '../widgets'
import gStyles, { baseLineHeight } from '../styles/global'

const MessageListItem = ({ msg, openMessage }) => (
  <TouchableHighlight underlayColor={'#DADADA'} onPress={openMessage.bind(this, msg)}>
    <View style={[styles.listItem, gStyles.seperator]}>
      <Text style={styles.from}>
        {msg.from.map(i => i.name || i.address).join(', ')}
      </Text>
      <Text>
        {msg.subject}
      </Text>
      <Text style={styles.body}>
        {msg.body && msg.body.substr(0, 100)}
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
    height: 2 * baseLineHeight,
    color: 'grey'
  }
})

export default MessageListItem
