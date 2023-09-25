import { View, Text, StyleSheet, Button } from 'react-native'
import { useReducer } from 'react'

import ColorCounter from '../components/ColorCounter'

const COLOR_STEP = 15

const reducer = (state, action) => {
  // * state === { red: number, green: number, blue: number }
  // * action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }
  switch (action.colorToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0
        ? state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0
        ? state
        : { ...state, green: state.green + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0
        ? state
        : { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}

const SquareScreen = () => {
  const [{ red, blue, green }, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

  return (
    <View>
      <ColorCounter
        color='Red'
        onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_STEP })}
        onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_STEP })}
      />
      <ColorCounter color='Blue'
        onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_STEP })}
        onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_STEP })}
      />
      <ColorCounter color='Green'
        onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_STEP })}
        onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_STEP })}
      />
      <View style={{ height: 15 - Button, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
