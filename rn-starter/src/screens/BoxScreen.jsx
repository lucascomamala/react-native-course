import { View, Text, StyleSheet } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle1}>
        Child #1
      </Text>
      <Text style={styles.textStyle2}>
        Child #2
      </Text>
      <Text style={styles.textStyle3}>
        Child #3
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
  },
  textStyle1: {
    borderWidth: 3,
    borderColor: 'red',
  },
  textStyle2: {
    borderWidth: 3,
    borderColor: 'red',
    left: 10,
    fontSize: 28,
  },
  textStyle3: {
    borderWidth: 3,
    borderColor: 'red',
  },
})

export default BoxScreen
