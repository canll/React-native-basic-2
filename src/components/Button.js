import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import styles from './Button.style'
const button = ({text,onPress}) => {
  return (
    <View>
    <TouchableOpacity style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default button