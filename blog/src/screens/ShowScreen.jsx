import { View, Text, StyleSheet } from 'react-native'
import { useContext } from 'react'

import { Context as BlogContext } from '../context/BlogContext'

const ShowScreen = ({navigation}) => {
  const id = navigation.getParam('id')
  const { state } = useContext(BlogContext)

  const blogPost = state.find((blogPost) => blogPost.id === id)

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ShowScreen
