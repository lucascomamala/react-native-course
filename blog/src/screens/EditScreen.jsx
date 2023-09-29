import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useContext } from 'react'

import { Context as BlogContext } from '../context/BlogContext'

const EditScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Edit Screen - {navigation.getParam('id')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default EditScreen
