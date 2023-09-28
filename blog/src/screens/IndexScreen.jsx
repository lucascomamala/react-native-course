import { View, Text, StyleSheet, FlatList, Button } from 'react-native'
import { useContext } from 'react'

import { Context as BlogContext } from '../context/BlogContext'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Text>Index Screen</Text>
      <Button
        title="Add Post"
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default IndexScreen
