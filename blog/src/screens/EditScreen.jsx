import { StyleSheet } from 'react-native'
import { useContext } from 'react'

import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../conmponents/BlogPostForm'

const EditScreen = ({ navigation }) => {
  const { state } = useContext(BlogContext)
  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(title, content)
      }}
    />
  )
}

const styles = StyleSheet.create({})

export default EditScreen
