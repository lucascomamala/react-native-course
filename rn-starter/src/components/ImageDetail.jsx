import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({title, imageSrc, score}) => {
  return (
    <View>
      <Image source={imageSrc} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  )
}

export default ImageDetail
