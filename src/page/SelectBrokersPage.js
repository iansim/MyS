import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { View, StyleSheet, Button,Text} from 'react-native'
import BrokersList from '../components/selectBrokers/BrokersList'
// import BrokersSelected from '../components/selectBrokers/BrokersSelected'
// import BrokersVendor from '../components/selectBrokers/BrockersVendor'

const SelectBrokersPage = props => {
  const {
    rootStore: { routerStore }
  } = props

  return (
    <View style={styles.container}>
        <BrokersList />
        <Button
          title='Select Brockers'
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
      flex: 1,
    }
  });

SelectBrokersPage.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(SelectBrokersPage)
