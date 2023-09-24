import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = () => {
  return <View>
    <Text style={styles.text}>Hi there!</Text>
    <Button
      title='Go to Components Demo'
      onPress={() => console.log('Button pressed')}
    />
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
