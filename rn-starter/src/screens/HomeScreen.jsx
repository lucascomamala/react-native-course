import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log(props.navigation);
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
      title='Go to Components Demo'
      onPress={() => props.navigation.navigate('Components')}
    />
    <TouchableOpacity onPress={() => props.navigation.navigate('Components')}>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
      <Text>Go to List Demo</Text>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
