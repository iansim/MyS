import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import TradeExecutionOption from '../components/tradeExecution/TradeExecutionOption'

const TradeExecutionOptionPage = () => {
  return (
    <View style={styles.container}>
      <TradeExecutionOption />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

TradeExecutionOptionPage.propTypes = {
  rootStore: PropTypes.object
}
export default TradeExecutionOptionPage
