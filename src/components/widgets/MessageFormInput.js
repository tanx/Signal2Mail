import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import EmailInput from './EmailInput'
import gStyles from '../styles/global'

const MessageFormInput = props => (
  <View style={[styles.input, gStyles.seperator]}>
    <Text style={[gStyles.text, styles.label]}>{props.label}:</Text>
    {props.type === 'email' ? <EmailIn {...props} /> : <TextIn {...props} />}
  </View>
)

const EmailIn = props => (
  <EmailInput
    style={styles.textField}
    {...props}
  />
)

const TextIn = props => (
  <TextInput
    style={[gStyles.textInput, styles.textField]}
    {...props}
  />
)

const styles = StyleSheet.create({
  input: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center'
  },
  label: {
    color: 'grey',
    marginRight: 5
  },
  textField: {
    height: 50,
    flexGrow: 1
  }
})

export default MessageFormInput
