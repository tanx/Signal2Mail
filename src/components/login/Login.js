import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import FormInput from '../widgets/FormInput'
import gStyles from '../styles/global'
import Form from '../widgets/Form'
import H1 from '../widgets/H1'
import Button from '../widgets/Button'

const Login = ({ setState, submit }) => (
  <View style={styles.container}>
    <Form>
      <H1>Sign up via email</H1>
      <Text style={gStyles.text}>You'll receive a verification code</Text>
      <FormInput
        type='email'
        placeholder='Email address'
        onChangeText={email => setState({email})}
        onSubmitEditing={submit}
        autoFocus
      />
      <Button onPress={submit}>Sign up</Button>
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

export default Login
