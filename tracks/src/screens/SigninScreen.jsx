import { View, StyleSheet, Text } from 'react-native'

import AuthForm from '../components/AuthForm'
import NavLink from '../components/NavLink'

const SigninScreen = () => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText='Sign In to Your Account'
        errorMessage=''
        buttonText='Sign In'
        onSubmit={() => {}}
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
