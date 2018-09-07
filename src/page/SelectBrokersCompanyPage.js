import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { View, StyleSheet, Button, Text } from 'react-native'
import BrokersSelectedCompany from '../components/selectBrokers/BrokersSelectedCompany'

const SelectBrokersCompanyPage = props => {
  const {
    rootStore: { routerStore }
  } = props

  return (
    <View style={styles.container}>
      <BrokersSelectedCompany />
      <Button
        title="Select Brockers"
        onPress={() => {
          routerStore.goTo('selectBrokersCompany')
        }}
      >
        <Text>Click Me!</Text>
      </Button>
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
