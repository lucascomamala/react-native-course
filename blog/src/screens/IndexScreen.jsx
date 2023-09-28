import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native'
import { useContext } from 'react'
import { FontAwesome } from '@expo/vector-icons'

import { Context as BlogContext } from '../context/BlogContext'

const IndexScreen = () => {
  const { state, addBlogPost } = useContext(BlogContext)

  return (
    <View>
      <Button
        title="Add Post"
        onPress={addBlogPost}
      />
      <FlatList
        data={state}
        keyExtractor={blogPost => blogPost.title}
        renderItem={({ item }) => {
          return <View style={styles.row}>
            <Text style={styles.title}>{item.title} - {item.id}</Text>
            <TouchableOpacity onPress={() => console.log(item.id)}>
              <FontAwesome style={styles.icon} name="trash-o" />
            </TouchableOpacity>
          </View>
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
})

export default IndexScreen
