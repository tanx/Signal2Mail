import { StyleSheet, Platform } from 'react-native'

export default StyleSheet.create({
  text: {
    fontFamily: (Platform.OS === 'ios') ? 'HelveticaNeue' : 'Roboto',
    lineHeight: (Platform.OS === 'ios') ? 20 : 24,
    fontSize: 15
  },
  textInput: {
    lineHeight: 24,
    fontSize: 15
  },
  block: {
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
    marginLeft: 15
  },
  seperator: {
    borderBottomWidth: 0.5,
    borderColor: '#ddd'
  }
})
