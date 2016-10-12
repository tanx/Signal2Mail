import React, { Component } from 'react'
import { NavigatorIOS } from 'react-native'
import MessageListScreen from './components/messageList/MessageListScreen'
import ComposeScreen from './components/compose/ComposeScreen'

class AppNavigator extends Component {
  render () {
    return (
      <NavigatorIOS
        ref='nav'
        initialRoute={{
          component: MessageListScreen,
          title: 'Messages',
          leftButtonTitle: 'Edit',
          rightButtonSystemIcon: 'compose',
          onRightButtonPress: this._openComposeScreen.bind(this)
        }}
        style={{flex: 1}}
      />
    )
  }

  _openComposeScreen () {
    this.refs.nav.push({
      component: ComposeScreen,
      title: 'Compose',
      leftButtonTitle: 'Cancel',
      onLeftButtonPress: () => this.refs.nav.pop(),
      rightButtonTitle: 'Send'
    })
  }
}

export default AppNavigator
