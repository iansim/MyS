import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { DrawerActions } from 'react-navigation'
import TopTrades from '../components/dashboard/TopTrades'

class TopTradesPage extends React.Component {
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
          centerComponent={{ text: 'Top Trades', style: { color: '#fff' } }}
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

        <TopTrades />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

TopTradesPage.propTypes = {
  rootStore: PropTypes.object,
  navigation: PropTypes.object
}
export default inject('rootStore')(TopTradesPage)
