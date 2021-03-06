import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Compose from './Compose'

class ComposeScreen extends Component {

  render () {
    return (
      <ScrollView>
        <Compose setState={this.setState.bind(this)} />
      </ScrollView>
    )
  }

}

export default ComposeScreen
