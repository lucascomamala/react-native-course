import { View, Text, StyleSheet, Button } from 'react-native'

import ColorCounter from '../components/ColorCounter'

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color='Red' />
      <ColorCounter color='Blue' />
      <ColorCounter color='Green' />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
