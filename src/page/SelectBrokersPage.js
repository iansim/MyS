import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { View, StyleSheet, Text } from 'react-native'
import { Header, Icon, Button } from 'react-native-elements'
import BrokersList from '../components/selectBrokers/BrokersList'
import { DrawerActions } from 'react-navigation'
// import BrokersSelected from '../components/selectBrokers/BrokersSelected'
// import BrokersVendor from '../components/selectBrokers/BrockersVendor'

// const SelectBrokersPage = props => {
//   const {
//     rootStore: { routerStore }
//   } = props
class SelectBrokersPage extends React.Component {
  render() {
    const { routerStore } = this.props.rootStore
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <Button
              icon={{ name: 'list' }}
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }}
            >
              <Icon name="menu" />
            </Button>
          }
          centerComponent={{ text: 'Select Brokers', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <BrokersList />
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

SelectBrokersPage.propTypes = {
  rootStore: PropTypes.object,
  navigation: PropTypes.object
}
export default inject('rootStore')(SelectBrokersPage)
