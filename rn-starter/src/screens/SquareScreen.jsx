import { View, Text, StyleSheet, Button } from 'react-native'
import { useState } from 'react'

import ColorCounter from '../components/ColorCounter'

const COLOR_STEP = 15

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)
  
  const setColor = (color, change) => {
    // * Accepted colors: red, green, blue
    switch (color) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        return
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change)
        return
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        return
      default:
        return
    }
  }


  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => setRed(red + COLOR_STEP)}
        onDecrease={() => setRed(red - COLOR_STEP)}
      />
      <ColorCounter color='Blue'
        onIncrease={() => setBlue(blue + COLOR_STEP)}
        onDecrease={() => setBlue(blue - COLOR_STEP)}
      />
      <ColorCounter color='Green'
        onIncrease={() => setGreen(green + COLOR_STEP)}
        onDecrease={() => setGreen(green - COLOR_STEP)}
      />
      <View style={{ height: 15 - Button, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
