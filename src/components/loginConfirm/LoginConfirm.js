import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FormInput from '../widgets/FormInput'
import gStyles from '../styles/global'
import Form from '../widgets/Form'
import H1 from '../widgets/H1'
import Button from '../widgets/Button'

const LoginConfirm = ({ setState, submit }) => (
  <View style={styles.container}>
    <Form>
      <H1>Check your inbox</H1>
      <Text style={gStyles.text}>And copy your verification code</Text>
      <FormInput
        placeholder='Paste code here'
        autoCorrect={false}
        autoCapitalize={'none'}
        keyboardType={'numeric'}
        onChangeText={code => setState({code})}
        onSubmitEditing={submit}
        autoFocus
      />
      <Button onPress={submit}>Confirm</Button>
    </Form>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export default LoginConfirm
