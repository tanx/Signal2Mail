import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import FormInput from '../widgets/FormInput'
import gStyles from '../styles/global'

const Compose = ({ setState }) => (
  <View>
    <FormInput label='To' type='email' onChangeText={to => setState({to})} autoFocus />
    <FormInput label='Cc' type='email' onChangeText={cc => setState({cc})} />
    <FormInput label='Subject' onChangeText={subject => setState({subject})} />
    <View style={gStyles.block}>
      <TextInput
        style={[gStyles.textInput, styles.body]}
        onChangeText={body => setState({body})}
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
