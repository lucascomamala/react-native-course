import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { Context as BlogContext } from '../context/BlogContext'

const ShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id')
  const { state } = useContext(BlogContext)

  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
        <FontAwesome name="edit" size={30} color="black" />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({})

export default ShowScreen
