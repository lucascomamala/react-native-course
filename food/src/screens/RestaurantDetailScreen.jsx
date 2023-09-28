import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useState, useEffect } from 'react'

import yelp from '../api/yelp'

const RestaurantDetailScreen = ({navigation}) => {
  const [result, setResult] = useState(null)
  const id = navigation.getParam('id')

  console.log(result)
  
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  return (
    <View>
      <Text>Restaurant Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default RestaurantDetailScreen
