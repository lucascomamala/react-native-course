import { View, Text, StyleSheet, Button } from 'react-native'
import { useReducer } from 'react'

import ColorCounter from '../components/ColorCounter'

const COLOR_STEP = 15

const reducer = (state, action) => {
  // * state === { red: number, green: number, blue: number }
  // * action === { type: 'change_red' || 'change_green' || 'change_blue', amount: 15 || -15 }
  switch (action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload }
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload }
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
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_STEP })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_STEP })}
      />
      <ColorCounter color='Blue'
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_STEP })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_STEP })}
      />
      <ColorCounter color='Green'
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_STEP })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_STEP })}
      />
      <View style={{ height: 15 - Button, height: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}></View>
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
