import React from 'react'
import { Text, StyleSheet } from 'react-native'
import gStyles from '../styles/global'

const Form = ({ children }) => (
  <Text style={[gStyles.text, styles.h1]}>
    {children}
  </Text>
)

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    lineHeight: 36,
    fontSize: 24
  }
})

export default Form
