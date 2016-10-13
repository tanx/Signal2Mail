import React, { Component } from 'react'
import { NavigatorIOS } from 'react-native'
import LoginScreen from './components/login/LoginScreen'
import LoginConfirmScreen from './components/loginConfirm/LoginConfirmScreen'
import MessageListScreen from './components/messageList/MessageListScreen'
import MessageScreen from './components/message/MessageScreen'
import ComposeScreen from './components/compose/ComposeScreen'

const appTitle = 'Signal2Mail'

class AppNavigator extends Component {

  render () {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: LoginScreen,
          title: appTitle,
          backButtonTitle: 'Back',
          passProps: { showNextScreen: this._showLoginConfirmScreen.bind(this) }
        }}
        style={{flex: 1}}
      />
    )
  }

  _showLoginConfirmScreen () {
    this.refs.nav.push({
      component: LoginConfirmScreen,
      title: appTitle,
      passProps: { showNextScreen: this._showMessageListScreen.bind(this) }
    })
  }

  _showMessageListScreen () {
    this.refs.nav.push({
      component: MessageListScreen,
      title: 'Messages',
      leftButtonTitle: 'Edit',
      rightButtonSystemIcon: 'compose',
      onRightButtonPress: this._showComposeScreen.bind(this),
      passProps: { openMessage: this._showMessageScreen.bind(this) }
    })
  }

  _showMessageScreen (msg) {
    this.refs.nav.push({
      component: MessageScreen,
      passProps: { msg }
    })
  }

  _showComposeScreen () {
    this.refs.nav.push({
      component: ComposeScreen,
      title: 'Compose',
      leftButtonTitle: 'Cancel',
      onLeftButtonPress: () => this.refs.nav.pop(),
      rightButtonTitle: 'Send',
      onRightButtonPress: () => this.refs.nav.pop()
    })
  }

}

export default AppNavigator
