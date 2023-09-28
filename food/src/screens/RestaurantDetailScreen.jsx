import { StyleSheet, Text, View, ScrollView } from 'react-native'

const RestaurantDetailScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  console.log(id)
  return (
    <View>
      <Text>Restaurant Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default RestaurantDetailScreen
