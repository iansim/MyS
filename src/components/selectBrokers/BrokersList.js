import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet, View } from 'react-native'
import { List, ListItem, Text } from 'react-native-elements'

const BrokersList = () => {
  // console.log(props)
  // let { state } = props;

  const listBroker = [
    {
      title: 'CIMB Securities',
      icon: 'location-city'
    },
    {
      title: 'Citibank',
      icon: 'location-city'
    },
    {
      title: 'DBS Vickers',
      icon: 'location-city'
    },
    {
      title: 'KGI Connex',
      icon: 'location-city'
    },
    {
      title: 'Lim & Tan Securities',
      icon: 'location-city'
    },
    {
      title: 'Maybank Kim Eng',
      icon: 'location-city'
    },
    {
      title: 'OCBC Securities',
      icon: 'location-city'
    },
    {
      title: 'Phillips Securities',
      icon: 'location-city'
    },
    {
      title: 'RHB Securities',
      icon: 'location-city'
    }
  ]

  return (
    <View>
      <Text style={styles.brokerText}>
        Click on your brokers to add to the App.
      </Text>
      <List>
        {listBroker.map(item => (
          <ListItem
            key={item.title}
            title={item.title}
            leftIcon={{ name: item.icon }}
          />
        ))}
      </List>
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

export default observer(BrokersList)
