import React from 'react'
import { Form, FormInput, H1, Text, Button, CenterColumn } from '../widgets'

const LoginConfirm = ({ setState, submit }) => (
  <CenterColumn>
    <Form>
      <H1>Check your inbox</H1>
      <Text>And copy your verification code</Text>
      <FormInput
        placeholder='Paste code here'
        keyboardType={'numeric'}
        onChangeText={code => setState({code})}
        onSubmitEditing={submit}
      />
      <Button onPress={submit}>Confirm</Button>
    </Form>
  </CenterColumn>
)

export default LoginConfirm
