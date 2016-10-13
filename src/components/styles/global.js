import { StyleSheet, Platform } from 'react-native'

export const baseFontSize = 15
export const baseLineHeight = Platform.OS === 'ios' ? 20 : 24
export const baseFont = Platform.OS === 'ios' ? 'HelveticaNeue' : 'Roboto'

export default StyleSheet.create({
  text: {
    fontFamily: baseFont,
    lineHeight: baseLineHeight,
    fontSize: baseFontSize
  },
  textInput: {
    fontFamily: baseFont,
    lineHeight: 24,
    fontSize: baseFontSize
  },
  seperator: {
    borderBottomWidth: 0.5,
    borderColor: '#ddd'
  }
})
