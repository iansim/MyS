import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet, View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native'

const LoginForm = (props) => {
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
      />
    <TextInput 
      placeholder="Password"
      style={styles.input} 
      secureTextEntry
      placeholderTextColor="rgba(255,255,255,0.7)"
      returnKeyType="go"
      ref={(input) => this.passwordInput = input}
      />
    
    <TouchableOpacity style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Login</Text>
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
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
  }
  
})

export default observer(LoginForm)