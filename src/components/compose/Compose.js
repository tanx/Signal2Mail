import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import gStyles from '../styles/global'

const Compose = () => (
  <View>
    <View style={[styles.input, gStyles.seperator]}>
      <Text style={[gStyles.text, styles.label]}>To:</Text>
      <TextInput
        style={[gStyles.textInput, styles.textField]}
        autoFocus
        autoCorrect={false}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        onChangeText={to => this.setState({to})} />
    </View>
    <View style={[styles.input, gStyles.seperator]}>
      <Text style={[gStyles.text, styles.label]}>Cc:</Text>
      <TextInput
        style={[gStyles.textInput, styles.textField]}
        autoCorrect={false}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
        onChangeText={cc => this.setState({cc})} />
    </View>
    <View style={[styles.input, gStyles.seperator]}>
      <Text style={[gStyles.text, styles.label]}>Subject:</Text>
      <TextInput
        style={[gStyles.textInput, styles.textField]}
        onChangeText={subject => this.setState({subject})} />
    </View>
    <View style={gStyles.block}>
      <TextInput
        style={[gStyles.textInput, styles.body]}
        multiline
        onChangeText={body => this.setState({body})} />
    </View>
  </View>
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
  },
  body: {
    height: 500
  }
})

export default Compose
