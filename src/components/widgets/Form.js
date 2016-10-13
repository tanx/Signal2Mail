import React from 'react'
import { View, StyleSheet } from 'react-native'

const Form = ({ children }) => (
  <View style={styles.contarRow}>
    <View style={styles.form}>
      {children}
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  form: {
    padding: 40,
    flexGrow: 1
  }
})

export default Form
