import React from 'react'
import { inject } from 'mobx-react'
import { observer } from 'mobx-react'
import Login from '../components/main/Login'
import { View, StyleSheet } from 'react-native'
import UserStore from '../store/UserStore'

const MainPage = props => {
  const {
    rootStore: { routerStore }
  } = props
  let {
    actions: { updateField, submitForm },
    state: { loggedIn }
  } = UserStore
  let LoginProps = { updateField, submitForm }
  if (loggedIn) {
    routerStore.goTo('selectBrokers')
  }
  return (
    <View style={styles.container}>
      <Login {...LoginProps} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default inject('rootStore')(observer(MainPage))
