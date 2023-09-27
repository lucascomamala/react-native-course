import { StyleSheet, Text, View } from 'react-native'
import { useState, useEffect } from 'react'

import yelp from '../api/yelp'

import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (serchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: serchTerm,
          location: 'san jose',
        }
      })
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessage('Something went wrong')
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])

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
