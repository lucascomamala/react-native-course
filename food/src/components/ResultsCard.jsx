import { StyleSheet, Text, View } from 'react-native'

const ResultsCard = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  )
}

export default ResultsCard
