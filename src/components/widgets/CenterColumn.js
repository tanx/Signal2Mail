import React from 'react'
import { View, StyleSheet } from 'react-native'

const CenterColumn = ({ children }) => (
  <View style={styles.container}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})

export default CenterColumn
