import React, { Component } from 'react'
import { Navigator } from 'react-native'
import { Container, Header, Title, Content, Button, Icon } from 'native-base'
import MessageListScreen from './components/messageList/MessageListScreen'

class App extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Button transparent>
            Edit
          </Button>
          <Title>Messages</Title>
          <Button transparent>
            <Icon name='ios-create-outline' />
          </Button>
        </Header>

        <Content>
          <MessageListScreen openMessage={() => {}} />
        </Content>
      </Container>
    )
  }
}

export default App
