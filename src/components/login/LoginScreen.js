import React, { Component } from 'react'
import Login from './Login'

class LoginScreen extends Component {

  render () {
    return (
      <Login
        setState={this.setState.bind(this)}
        submit={this._submit.bind(this)}
      />
    )
  }

  _submit () {
    let email = this.state && this.state.email
    this.props.showNextScreen(email)
  }

}

export default LoginScreen
