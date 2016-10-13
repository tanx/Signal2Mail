import React from 'react'
import { Form, FormInput, H1, Text, Button, CenterColumn } from '../widgets'

const Login = ({ setState, submit }) => (
  <CenterColumn>
    <Form>
      <H1>Sign up via email</H1>
      <Text>You'll receive a verification code</Text>
      <FormInput
        type='email'
        placeholder='Email address'
        onChangeText={email => setState({email})}
        onSubmitEditing={submit}
        autoFocus
      />
      <Button onPress={submit}>Sign up</Button>
    </Form>
  </CenterColumn>
)

export default Login
