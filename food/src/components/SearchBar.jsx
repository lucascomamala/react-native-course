import { StyleSheet, Text, View } from 'react-native'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Text>
        SearchBar
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    marginTop: 15,
  },
})

export default SearchBar
