import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Button, Text} from 'react-native'
import TradeExecution from '../components/tradeExecution/TradeExecution'

const TradeExecutionPage = props => {

  return (
    <View style={styles.container}>
        <TradeExecution />
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    }
  });

TradeExecutionPage.propTypes = {
  rootStore: PropTypes.object
}
export default TradeExecutionPage
