import { Text, Input, Button } from 'react-native-elements'
import { View, Stylesheet } from 'react-native'
import { useState } from 'react'

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Input
        label='Email'
        value={email}
        onChangeText={setEmail}
        autoCapitalize='none'
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label='Password'
        value={password}
        onChangeText={setPassword}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry
      />
      {state.errorMessage ? <Text style={styles.errorMessage}>{state.errorMessage}</Text> : null}
      <Spacer>
        <Button
          title='Sign Up'
          onPress={() => signup({ email, password })}
        />
      </Spacer>
    </>
  )
}

const styles = Stylesheet.create({})

export default AuthForm
