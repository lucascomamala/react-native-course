import { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-elements'

import Spacer from '../components/Spacer'
import AuthForm from '../components/AuthForm'
import { Context as AuthContext } from '../context/authContext'

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        buttonText='Sign Up'
        onSubmit={signup}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead.
          </Text>
        </Spacer>
      </TouchableOpacity>
    </View>
  )
}

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200
  },
  link: {
    color: 'blue'
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginTop: 15
  }
})

export default SignupScreen
