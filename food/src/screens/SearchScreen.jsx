import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import yelp from '../api/yelp'

import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const searchApi = async () => {
    const response = await yelp.get('/search', {
      params: {
        limit: 50,
        term,
        location: 'san jose',
      }      
    })
    setResults(response.data.businesses)
  }

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={searchApi}
      />
      <Text>
        SearchScreen
      </Text>
      <Text>
        We have found {results.length} results
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
})

export default SearchScreen
