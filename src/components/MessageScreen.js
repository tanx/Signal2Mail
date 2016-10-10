import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { Text } from 'native-base'

const MessageScreen = ({ msg }) => (
  <ScrollView>
    <View style={[styles.block, styles.seperator]}>
      <Text style={styles.from}>{msg.from.map(i => i.name || i.address).join(', ')}</Text>
      <Text style={styles.to}>To: {msg.to.map(i => i.name || i.address).join(', ')}</Text>
    </View>
    <View style={[styles.block, styles.seperator]}>
      <Text style={styles.subject}>{msg.subject}</Text>
    </View>
    <View style={styles.block}>
      <Text style={styles.body}>{msg.body}</Text>
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  block: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: 15
  },
  seperator: {
    borderBottomWidth: 0.5,
    borderColor: '#ddd'
  },
  from: {
    fontWeight: 'bold'
  },
  to: {
  },
  subject: {
    fontWeight: 'bold'
  },
  body: {
  }
})

export default MessageScreen
