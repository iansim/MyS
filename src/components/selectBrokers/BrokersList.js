import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
import { List, ListItem, Text } from 'react-native-elements'

const BrokersList = props => {
  const {
    rootStore: { routerStore }
  } = props

  // console.log(props)
  // let { state } = props;

  // const listBroker = [
  //   {
  //     title: 'CIMB Securities',
  //     icon: 'location-city'
  //   },
  //   {
  //     title: 'Citibank',
  //     icon: 'location-city'
  //   },
  //   {
  //     title: 'DBS Vickers',
  //     icon: 'location-city'
  //   },
  //   {
  //     title: 'KGI Connex',
  //     icon: 'location-city'
  //   },
  //   {
  //     title: 'Lim & Tan Securities',
  //     icon: 'location-city'
  //   },
  //   {
  //     title: 'Maybank Kim Eng',
  //     icon: 'location-city'
  //   },
  //   {
  //     title: 'OCBC Securities',
  //     icon: 'location-city'
  //   },
  //   {
  //     title: 'Phillips Securities',
  //     icon: 'location-city'
  //   },
  //   {
  //     title: 'RHB Securities',
  //     icon: 'location-city'
  //   }
  // ]

  return (
    <View>
      <Text style={styles.brokerText}>
        Click on your brokers to add to the App.
      </Text>
      <List>
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'CIMB Securities'}
          leftIcon={{ name: 'location-city' }}
        />
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'Citibank'}
          leftIcon={{ name: 'location-city' }}
        />
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'DBS Vickers'}
          leftIcon={{ name: 'location-city' }}
        />
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'KGI Connex'}
          leftIcon={{ name: 'location-city' }}
        />
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'Lim & Tan Securities'}
          leftIcon={{ name: 'location-city' }}
        />
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'Maybank Kim Eng'}
          leftIcon={{ name: 'location-city' }}
        />
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'OCBC Securities'}
          leftIcon={{ name: 'location-city' }}
        />
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'Phillips Securities'}
          leftIcon={{ name: 'location-city' }}
        />
        <ListItem
          onPress={() => {
            routerStore.goTo('selectBrokersCompany')
          }}
          title={'RHB Securities'}
          leftIcon={{ name: 'location-city' }}
        />
      </List>

      {/* <List>
        {listBroker.map(item => (
          <ListItem
            key={item.title}
            title={item.title}
            leftIcon={{ name: item.icon }}
          />
        ))}
      </List> */}
    </View>
  )
}

const styles = StyleSheet.create({
  brokerText: {
    paddingHorizontal: 10,
    paddingTop: 17,
    fontSize: 18
  }
})

BrokersList.propTypes = {
  rootStore: PropTypes.object
}

export default inject('rootStore')(observer(BrokersList))
