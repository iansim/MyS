import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import Login from '../components/main/Login'
import { View, StyleSheet } from 'react-native'

const MainPage = props => {
  const {
    rootStore: { routerStore }
  } = props

  return (
    <View style={styles.container}>
      <Login />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

MainPage.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(MainPage)
