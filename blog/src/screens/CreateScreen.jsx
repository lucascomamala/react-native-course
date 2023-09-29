import { StyleSheet } from 'react-native'
import { useContext } from 'react'

import { Context as BlogContext } from '../context/BlogContext'
import BlogPostForm from '../conmponents/BlogPostForm'

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext)

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'))
      }}
      saveBtnTitle="Publish"
    />
  )
}

const styles = StyleSheet.create({

})

export default CreateScreen
