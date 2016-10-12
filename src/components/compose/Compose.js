import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import FormInput from '../widgets/FormInput'
import gStyles from '../styles/global'

const Compose = () => (
  <View>
    <FormInput label='To' type='email' autoFocus />
    <FormInput label='Cc' type='email' />
    <FormInput label='Subject' />
    <View style={gStyles.block}>
      <TextInput
        style={[gStyles.textInput, styles.body]}
        multiline />
    </View>
  </View>
)

const styles = StyleSheet.create({
  body: {
    height: 500
  }
})

export default Compose
