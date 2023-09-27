import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} color="black" /> 
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#c6c6c6',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    flex: 1,
  },
})

export default SearchBar
