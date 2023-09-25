import { View, Text, StyleSheet, Button } from 'react-native'

import React from 'react'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button
        title={`Increase ${color}`}
        onPress={() => onIncrease()}
      />
      <Button
        title={`Decrease ${color}`}
        onPress={() => onDecrease()}
      />
    </View>
  )
}

export default ColorCounter
