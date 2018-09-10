import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import BrokersSelectedCompany from '../components/selectBrokers/BrokersSelectedCompany'

const SelectBrokersCompanyPage = props => {
  const {
    rootStore: { routerStore }
  } = props

  return (
    <View style={styles.container}>
      <BrokersSelectedCompany />

      <Button
        style={{ marginTop: 15 }}
        title="Dashboard"
        onPress={() => {
          routerStore.goTo('dashboard')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

SelectBrokersCompanyPage.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(SelectBrokersCompanyPage)
