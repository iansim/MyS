import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import StockPortfolio from '../components/dashboard/StockPortfolio'
import { DrawerActions } from 'react-navigation'

class DashBoard extends React.Component {
  render() {
    const { routerStore } = this.props.rootStore
    return (
      <View style={styles.container}>
        <Header
          leftComponent={
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }}
            >
              <Icon color="#ffffff" name="menu" />
            </TouchableOpacity>
          }
          centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
          rightComponent={
            <TouchableOpacity
              style={styles.menuWrapper}
              onPress={() => {
                routerStore.goTo('main')
              }}
            >
              <Icon color="#ffffff" name="home" />
            </TouchableOpacity>
          }
        />
        <StockPortfolio />

  
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

DashBoard.propTypes = {
  rootStore: PropTypes.object,
  navigation: PropTypes.object
}
export default inject('rootStore')(DashBoard)
