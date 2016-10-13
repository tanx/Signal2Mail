import React, { Component } from 'react'
import LoginConfirm from './LoginConfirm'

class LoginConfirmScreen extends Component {

  render () {
    return (
      <LoginConfirm
        setState={this.setState.bind(this)}
        submit={this._submit.bind(this)}
      />
    )
  }

  _submit () {
    let code = this.state && this.state.code
    this.props.showNextScreen(code)
  }

}

export default LoginConfirmScreen
