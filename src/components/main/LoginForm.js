import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import {
  StyleSheet,
  View,
  Button,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native'

const LoginForm = props => {
  const { updateField, submitForm } = props
  // let passwordInput = null
  return (
    <View style={styles.containar}>
      <StatusBar barStyle="light-content" />
      <TextInput
        placeholder="Login ID or Email"
        style={styles.input}
        placeholderTextColor="rgba(255,255,255,0.7)"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={text => {
          updateField('username', text)
        }}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="rgba(255,255,255,0.7)"
        returnKeyType="go"
        // ref={input => (passwordInput = input)}
        onChangeText={text => {
          updateField('password', text)
        }}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Button
          small
          title="Login"
          color="#ffffff"
          onPress={submitForm}
          style={styles.buttonText}
        >
          Login
        </Button>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containar: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#fff',
    paddingHorizontal: 10
  },
  buttonContainer: {
    backgroundColor: '#000',
    opacity: 0.9,
    height: 40,
    marginTop: 0,
    paddingTop: 0
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
})
LoginForm.propTypes = {
  navigation: PropTypes.object,
  updateField: PropTypes.func,
  submitForm: PropTypes.func
}
export default observer(LoginForm)
