import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import gStyles from '../styles/global'

const MessageScreen = ({ msg }) => (
  <ScrollView>
    <View style={[gStyles.block, gStyles.seperator]}>
      <Text style={[gStyles.text, styles.from]}>{msg.from.map(i => i.name || i.address).join(', ')}</Text>
      <Text style={gStyles.text}>To: {msg.to.map(i => i.name || i.address).join(', ')}</Text>
    </View>
    <View style={[gStyles.block, gStyles.seperator]}>
      <Text style={[gStyles.text, styles.subject]}>{msg.subject}</Text>
    </View>
    <View style={gStyles.block}>
      <Text style={gStyles.text}>{msg.body}</Text>
    </View>
  </ScrollView>
)

const styles = StyleSheet.create({
  from: {
    fontWeight: 'bold'
  },
  subject: {
    fontWeight: 'bold'
  }
})

export default MessageScreen
