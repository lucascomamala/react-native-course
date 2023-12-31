import { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/authContext'

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
      <AuthForm
        headerText='Sign Up for Tracker'
        errorMessage={state.errorMessage}
        buttonText='Sign Up'
        onSubmit={signup}
      />
      <NavLink
        text='Already have an account? Sign in instead.'
        routeName='Signin'
      />      
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
    marginBottom: 100
  }
})

export default SignupScreen
