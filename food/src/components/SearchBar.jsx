import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.icon} color="black" /> 
      <TextInput style={styles.input} placeholder="Search" />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#d1d1d1',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  }
})

export default SearchBar
