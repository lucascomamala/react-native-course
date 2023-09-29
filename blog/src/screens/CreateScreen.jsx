import { StyleSheet } from 'react-native'
import { useContext } from 'react'

import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../conmponents/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext)

  return (
    <BlogPostForm />
  )
}

const styles = StyleSheet.create({

})

export default CreateScreen
