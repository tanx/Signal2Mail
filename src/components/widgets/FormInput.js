import React from 'react'
import { TextInput, StyleSheet } from 'react-native'
import EmailInput from './EmailInput'
import gStyles from '../styles/global'

const FormInput = props => (
  props.type === 'email' ? <EmailIn {...props} /> : <TextIn {...props} />
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
  textField: {
    marginTop: 10,
    height: 50,
    paddingLeft: 15,
    borderWidth: 1,
    borderColor: 'lightgrey'
  }
})

export default FormInput
