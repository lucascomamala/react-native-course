import { View, Text, StyleSheet, Button } from 'react-native'
import { useReducer } from 'react'

import ColorCounter from '../components/ColorCounter'

const COLOR_STEP = 15

const reducer = (state, action) => {
  // * state === { red: number, green: number, blue: number }
  // * action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  switch (action.colorToChange) {
    case 'red':
      return {
        ...state,
        red: state.red + action.amount
      }
    case 'green':
      return {
        ...state,
        green: state.green + action.amount
      }
    case 'blue':
      return {
        ...state,
        blue: state.blue + action.amount
      }
    default:
      return state
  }
}

const SquareScreen = () => {
  const [red, setRed] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

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
        onIncrease={() => }
        onDecrease={() => }
      />
      <ColorCounter color='Blue'
        onIncrease={() => }
        onDecrease={() => }
      />
      <ColorCounter color='Green'
        onIncrease={() => }
        onDecrease={() => }
      />
      <View style={{ height: 15 - Button, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
