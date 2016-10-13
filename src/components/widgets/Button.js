import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import gStyles from '../styles/global'

const Button = ({ children, onPress }) => (
  <TouchableOpacity style={styles.btn} onPress={onPress}>
    <Text style={[gStyles.text, styles.btnText]}>
      {children}
    </Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
    height: 50,
    backgroundColor: 'dodgerblue',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnText: {
    color: 'white',
    fontSize: 18
  }
})

export default Button
