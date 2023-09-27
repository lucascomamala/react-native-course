import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import ResultsList from '../components/ResultsList'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => result.price === price)
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Text>
        We have found {results.length} results
      </Text>
      <ResultsList
        title="On a budget"
        results={filterResultsByPrice('$')}
      />
      <ResultsList
        title="Cost Effective"
        results={filterResultsByPrice('$$')}
      />
      <ResultsList
        title="Bit Pricier"
        results={filterResultsByPrice('$$$')}
      />
      <ResultsList
        title="Big Spender"
        results={filterResultsByPrice('$$$$')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
})

export default SearchScreen
