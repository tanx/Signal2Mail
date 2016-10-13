import React from 'react'
import { View, StyleSheet } from 'react-native'
import gStyles from '../styles/global'

const Block = ({ children, seperator }) => (
  <View style={seperator ? [styles.block, gStyles.seperator] : styles.block}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  block: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: 15
  }
})

export default Block
