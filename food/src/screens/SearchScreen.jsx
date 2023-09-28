import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => result.price === price)
  }

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <ScrollView>
        <ResultsList
          title="Cost Effective"
          results={filterResultsByPrice('$')}
          navigation={navigation}
        />
        <ResultsList
          title="Bit Pricier"
          results={filterResultsByPrice('$$')}
          navigation={navigation}
        />
        <ResultsList
          title="Big Spender"
          results={filterResultsByPrice('$$$')}
          navigation={navigation}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
})

export default SearchScreen
