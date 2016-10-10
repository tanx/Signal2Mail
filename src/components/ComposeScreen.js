import React, { Component } from 'react'
import { ScrollView, View, TextInput, StyleSheet } from 'react-native'
import { Text } from 'native-base'

class ComposeScreen extends Component {

  render () {
    return (
      <ScrollView>
        <View style={[styles.block, styles.input, styles.seperator]}>
          <Text style={styles.label}>To:</Text>
          <TextInput
            style={styles.textField}
            autoFocus
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={to => this.setState({to})} />
        </View>
        <View style={[styles.block, styles.input, styles.seperator]}>
          <Text style={styles.label}>Cc:</Text>
          <TextInput
            style={styles.textField}
            autoCorrect={false}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
            onChangeText={cc => this.setState({cc})} />
        </View>
        <View style={[styles.block, styles.input, styles.seperator]}>
          <Text style={styles.label}>Subject:</Text>
          <TextInput
            style={styles.textField}
            onChangeText={subject => this.setState({subject})} />
        </View>
        <View style={styles.block}>
          <TextInput
            style={styles.body}
            multiline
            onChangeText={body => this.setState({body})} />
        </View>
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  block: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: 15
  },
  input: {
    flex: 1,
    flexDirection: 'row'
  },
  seperator: {
    borderBottomWidth: 0.5,
    borderColor: '#ddd'
  },
  label: {
    marginRight: 3
  },
  textField: {
    flexGrow: 1
  },
  body: {
    height: 500
  }
})

export default ComposeScreen
