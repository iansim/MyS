import React from 'react'
import { observer } from 'mobx-react'
import {
  StyleSheet,
  Image,
  View,
  Text,
  KeyboardAvoidingView
} from 'react-native'
import LoginForm from './LoginForm'

const Login = () => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.containar}>
      <View style={styles.logoContainar}>
        <Image
          style={styles.logo}
          source={require('../../images/Octocat.png')}
        />
        <Text style={styles.title}>My App</Text>
      </View>
      <View style={styles.formContainar}>
        <LoginForm />
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  containar: {
    flex: 1,
    backgroundColor: '#096dd9'
  },
  logo: {
    width: 100,
    height: 100
  },
  logoContainar: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1
  },
  title: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.9,
    width: 160
  }
})

export default observer(Login)
