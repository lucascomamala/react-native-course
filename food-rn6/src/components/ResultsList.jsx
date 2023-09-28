import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

import ResultsCard from './ResultsCard'

const ResultsList = ({ title, results, navigation }) => {
  
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

export default withNavigation(ResultsList)
