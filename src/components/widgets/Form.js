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
    flexGrow: 1,
    padding: 40
  }
})

export default Form
