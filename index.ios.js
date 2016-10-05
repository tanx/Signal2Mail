import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import ViewContainer from './src/components/ViewContainer';
import StatusBarBackground from './src/components/StatusBarBackground';
import MessageList from './src/components/MessageList';
import data from './src/dummy-data';

class Signal2Mail extends Component {
  render() {
    return (
      <ViewContainer>
        <StatusBarBackground color="white" />
        <MessageList messages={data.messages} />
      </ViewContainer>
    );
  }
}

AppRegistry.registerComponent('Signal2Mail', () => Signal2Mail);