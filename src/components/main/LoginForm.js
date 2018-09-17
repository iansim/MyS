import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import { Button } from 'react-native-elements'

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
          title="Login"
          containerViewStyle={{ width: '100%', marginLeft: 0, marginRight: 0 }}
          buttonStyle={{
            width: '100%',
            backgroundColor: 'rgba(204, 204, 204, 1)',
            borderRadius: 5
          }}
          textStyle={{ fontSize: 13, color: 'white' }}
          onPress={submitForm}
          underlayColor="transparent"
        />
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
    alignItems: 'center'
  }
})
LoginForm.propTypes = {
  navigation: PropTypes.object,
  updateField: PropTypes.func,
  submitForm: PropTypes.func
}
export default observer(LoginForm)
