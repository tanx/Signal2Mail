import React from 'react'
import { Text } from 'react-native'
import gStyles from '../styles/global'

const Txt = props => (
  <Text style={[gStyles.text, props.style]}>
    {props.children}
  </Text>
)

export default Txt
