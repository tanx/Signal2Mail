import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

const MessageListItem = ({ msg }) => (
  <TouchableOpacity activeOpacity={0.5}>
    <View style={styles.listItem}>
      <Text style={styles.from}>
        {msg.from.map(i => i.name || i.address).join(', ')}
      </Text>
      <Text style={styles.subject}>
        {msg.subject}
      </Text>
      <Text style={styles.body}>
        {msg.body && msg.body.length > 100 ? (msg.body.substr(0, 97) + '...') : msg.body}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 7,
    borderBottomWidth: 1,
    borderColor: 'lightgrey'
  },
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
});

export default MessageListItem;