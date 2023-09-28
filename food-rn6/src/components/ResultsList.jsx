import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";

import ResultsCard from './ResultsCard'

const ResultsList = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('RestaurantShow', { id: item.id })}
          >
            <ResultsCard
              result={item}
            />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
})

export default ResultsList
