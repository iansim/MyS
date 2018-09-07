import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet ,View } from 'react-native'
import { List, ListItem, Header, Text, Icon } from 'react-native-elements'

const BrokersList = () => {
  // console.log(props)
  // let { state } = props;
 
  const list = [
    {
      title: 'CIMB Securities',
      icon: 'flight-takeoff'
    },
    {
      title: 'Citibank',
      icon: 'flight-takeoff'
    },
    {
      title: 'DBS Vickers',
      icon: 'flight-takeoff'
    },
    {
      title: 'KGI Connex',
      icon: 'flight-takeoff'
    },
    {
      title: 'Lim & Tan Securities',
      icon: 'flight-takeoff'
    },
      {
        title: 'Maybank Kim Eng',
        icon: 'flight-takeoff'
      },
      {
        title: 'OCBC Securities',
        icon: 'flight-takeoff'
      },
      {
        title: 'Phillips Securities',
        icon: 'flight-takeoff'
      },
      {
        title: 'RHB Securities',
        icon: 'flight-takeoff'
      }
  ]
  
  
  return (
<View>
<Header
  leftComponent={{ icon: 'navigate-before', color: '#fff' }}
  centerComponent={{ text: 'Select Brokers', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
<Text style={styles.brokerText}>
        Click on your brokers to add to the App.
      </Text>
    <List>
    {
      list.map((item) => (
        <ListItem
          key={item.title}
          title={item.title}
          leftIcon={{name: item.icon}}
        />
      ))
    }
  </List>
  </View>
    
  )
}

const styles = StyleSheet.create({
  brokerText: {
    paddingHorizontal: 10,
    paddingTop: 17,
  }
})

export default observer(BrokersList)
