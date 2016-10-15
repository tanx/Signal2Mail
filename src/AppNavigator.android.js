import React, { Component } from 'react'
import { Navigator, BackAndroid } from 'react-native'
import { Container, Header, Title, Content, Button } from 'native-base'
import LoginScreen from './components/login/LoginScreen'
import LoginConfirmScreen from './components/loginConfirm/LoginConfirmScreen'
import MessageListScreen from './components/messageList/MessageListScreen'
import MessageScreen from './components/message/MessageScreen'
import ComposeScreen from './components/compose/ComposeScreen'

const appTitle = 'Signal2Mail'

class AppNavigator extends Component {

  constructor (props) {
    super(props)
    this._handleBackButton()
  }

  render () {
    return (
      <Navigator
        initialRoute={{
          component: LoginScreen,
          title: appTitle,
          passProps: { showNextScreen: this._showLoginConfirmScreen.bind(this) },
          index: 0
        }}
        renderScene={(route, navigator) => {
          this._route = route
          this._navigator = navigator
          return this._renderScene()
        }}
        configureScene={(route, routeStack) => route.animation ? route.animation : Navigator.SceneConfigs.PushFromRight}
      />
    )
  }

  _renderScene () {
    let rightBtn
    if (this._route.rightButtonTitle) {
      rightBtn = <Button
        transparent
        onPress={this._route.onRightButtonPress}>
        {this._route.rightButtonTitle}
      </Button>
    }

    return (
      <Container>
        <Header>
          <Button
            transparent
            onPress={this._onBack.bind(this)}>
            Back
          </Button>
          <Title>{this._route.title}</Title>
          {rightBtn}
        </Header>

        <Content style={{backgroundColor: 'white'}}>
          <this._route.component {...this._route.passProps} />
        </Content>
      </Container>
    )
  }

  _showLoginConfirmScreen () {
    this._onForward({
      component: LoginConfirmScreen,
      title: appTitle,
      passProps: { showNextScreen: this._showMessageListScreen.bind(this) }
    })
  }

  _showMessageListScreen () {
    this._onForward({
      component: MessageListScreen,
      title: 'Messages',
      leftButtonTitle: 'Edit',
      rightButtonTitle: 'Compose',
      onRightButtonPress: this._showComposeScreen.bind(this),
      passProps: { openMessage: this._showMessageScreen.bind(this) }
    })
  }

  _showMessageScreen (msg) {
    this._onForward({
      component: MessageScreen,
      passProps: { msg }
    })
  }

  _showComposeScreen () {
    this._onForward({
      component: ComposeScreen,
      title: 'Compose',
      leftButtonTitle: 'Cancel',
      onLeftButtonPress: () => this._onBack(),
      rightButtonTitle: 'Send',
      onRightButtonPress: () => this._onBack(),
      animation: Navigator.SceneConfigs.FloatFromBottom
    })
  }

  _onForward (route) {
    this._navigator.push({
      ...route,
      index: this._route.index + 1
    })
  }

  _onBack () {
    if (this._route && this._route.index > 0) {
      this._navigator.pop()
    }
  }

  _handleBackButton () {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      if (this._route && this._route.index > 0) {
        this._onBack()
        return true
      }
      return false
    })
  }

}

export default AppNavigator
