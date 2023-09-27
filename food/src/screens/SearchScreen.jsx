import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'

import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('term was submitted')}
      />
      <Text>
        SearchScreen
      </Text>
      <Text>
        {term}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
})

export default SearchScreen
