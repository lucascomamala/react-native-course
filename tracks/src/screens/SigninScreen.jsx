import { useContext } from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationEvents } from 'react-navigation'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'
import { Context as AuthContext } from '../context/authContext'

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />
        
      <AuthForm
        headerText='Sign In to Your Account'
        errorMessage={state.errorMessage}
        buttonText='Sign In'
        onSubmit={signin}
      />
      <NavLink
        text='Dont have an account? Sign up instead.'
        routeName='Signup'
      />
    </View>
  )
}

SigninScreen.navigationOptions = () => {
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

export default SigninScreen
