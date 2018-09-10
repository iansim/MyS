import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Header, Icon } from 'react-native-elements'
import { DrawerActions } from 'react-navigation'
import Trending from '../components/dashboard/Trending'

class TrendingPage extends React.Component {
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
          centerComponent={{ text: 'Trending', style: { color: '#fff' } }}
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
        <Trending />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

TrendingPage.propTypes = {
  rootStore: PropTypes.object,
  navigation: PropTypes.object
}
export default inject('rootStore')(TrendingPage)
