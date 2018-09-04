import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet, Image, View, Text } from 'react-native'
// import {
//   View,
//   Text
// } from 'native-base'
import LoginForm from './LoginForm'

const Login = (props) => {  
  return(
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
        style={styles.logo}
        source={require('../../images/Octocat.png')} />
        <Text style={styles.title}>My Money System</Text>
      </View>   
      <View>
        <LoginForm />
      </View>     
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: '30%'
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    marginTop: 15,
    textAlign: 'center',
    color: '#fff'
  }
})

export default observer(Login)