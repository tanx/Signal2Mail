import React from 'react'
import { TextInput } from 'react-native'
import gStyles from '../styles/global'

const EmailInput = props => (
  <TextInput
    style={[gStyles.textInput, props.style]}
    autoCorrect={false}
    autoCapitalize={'none'}
    keyboardType={'email-address'}
    {...props}
  />
)

export default EmailInput
