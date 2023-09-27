import { StyleSheet, Text, View, FlatList } from 'react-native'

import ResultsCard from './ResultsCard'

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>
        {title}
      </Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => 
          <ResultsCard
            result={item}
          />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default ResultsList
