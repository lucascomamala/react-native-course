import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetail'

const ImagesScreen = () => {
  return (
    <View>
      <ImageDetail title="Forest" imageSrc={require('../../assets/forest.jpg')} />
      <ImageDetail title="Beach" imageSrc={require('../../assets/beach.jpg')} />
      <ImageDetail title="Mountain" imageSrc={require('../../assets/mountain.jpg')} />
    </View>
  )
}

const styles = StyleSheet.create({})

export default ImagesScreen
