import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Icon, Button } from 'react-native-elements'
import BrokersList from '../components/selectBrokers/BrokersList'

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
            <TouchableOpacity
              onPress={() => {
                routerStore.goTo('main')
              }}
            >
              <Icon color="#ffffff" name="navigate-before" />
            </TouchableOpacity>
          }
          centerComponent={{ text: 'Select Brokers', style: { color: '#fff' } }}
          rightComponent={
            <TouchableOpacity
              onPress={() => {
                routerStore.goTo('main')
              }}
            >
              <Icon color="#ffffff" name="home" />
            </TouchableOpacity>
          }
        />

        <BrokersList />

        <Button
          style={{ marginTop: 15 }}
          title="Select Brockers"
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
        />
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
