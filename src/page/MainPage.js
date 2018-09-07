import React from 'react'
import { inject } from 'mobx-react'
import Login from '../components/main/Login'
import { View, StyleSheet } from 'react-native'

const MainPage = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default inject('rootStore')(MainPage)
