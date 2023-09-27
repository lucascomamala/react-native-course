import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()
  
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
    </View>
  )
}

const styles = StyleSheet.create({
})

export default SearchScreen
