import { View, Text, Pressable } from 'react-native'
import React from 'react';
import styles from './styles'

interface IButton {
    text?: string;
    onPress?: () => void;
}

const Button = ({ text = '', onPress = () => {} }: IButton) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}

export default Button