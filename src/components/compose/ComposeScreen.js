import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Compose from './Compose'

class ComposeScreen extends Component {

  render () {
    return (
      <ScrollView>
        <Compose />
      </ScrollView>
    )
  }

}

export default ComposeScreen
