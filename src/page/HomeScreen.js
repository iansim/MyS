import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
//this.props.navigation.dispatch(DrawerActions.closeDrawer())
class HomeScreen extends React.Component {
  render() {
    return <View />
  }
}
HomeScreen.propTypes = {
  navigation: PropTypes.object
}
export default HomeScreen
