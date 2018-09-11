import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { Header, List, ListItem, Icon } from 'react-native-elements'

const TradeExecution = props => {
  const {
    rootStore: { routerStore }
  } = props

  return (
  <View>
    <Header
      leftComponent={
        <TouchableOpacity 
          onPress={() => {
            routerStore.goTo('dashboard')
          }
        }>
        <Icon color='#ffffff' name="navigate-before" />
        </TouchableOpacity>             
      }
      centerComponent={{ text: 'Trade Execution', style: { color: '#fff' } }}
      rightComponent={
        <TouchableOpacity 
          onPress={() => {
            routerStore.goTo('main')
          }
        }>
          <Icon color='#ffffff' name="home" />
        </TouchableOpacity>   
        }
      />
      <View >
      <Text style={styles.textTitle}>kindly select the options if more suitable for you.</Text>
        </View>
    <List>
   
          <ListItem
          onPress={() => {
            routerStore.goTo('tradeExecutionOption')
          }
        }
            // onPress={()=>{alert(item.url)}}
            title={'Option A'}
          />
     

          <ListItem
          onPress={() => {
            routerStore.goTo('tradeExecutionOption')
          }
        }
            // onPress={()=>{alert(item.url)}}
            title={'Option B'}
          />
       
    </List>
  </View>
  )
}

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 18,
    paddingHorizontal: 15,
    paddingTop: 15,

  }
})


TradeExecution.propTypes = {
  rootStore: PropTypes.object
}

export default inject('rootStore')(observer(TradeExecution))
