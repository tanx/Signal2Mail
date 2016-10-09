import React, { Component } from 'react'
import { Container, Header, Title, Content, Button, Icon } from 'native-base'
import MessageList from './components/MessageList'
import data from './dummy-data'

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
          <MessageList messages={data.messages} />
        </Content>
      </Container>
    )
  }
}

export default App
