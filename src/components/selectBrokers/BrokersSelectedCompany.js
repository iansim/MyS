import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet ,View, Image } from 'react-native'
import { Button, Header, FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'


const BrokersSelectedCompany = () => {
  // console.log(props)
  // let { state } = props;
 
  
  
  
  return (
<View>
<Header
  leftComponent={{ icon: 'navigate-before', color: '#fff' }}
  centerComponent={{ text: 'Select Brokers', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
<Image
  style={styles.logo}
  source={require('../../images/cimb_securities.png')}
/>

<FormLabel>User ID</FormLabel>
<FormInput />
<FormValidationMessage>Error message</FormValidationMessage>

<FormLabel>Name</FormLabel>
<FormInput />
<FormValidationMessage>Error message</FormValidationMessage>
<Button title='Submit' />

</View>

    
  )
}

const styles = StyleSheet.create({
  brokerText: {
    paddingHorizontal: 10,
    paddingTop: 17,
  }
})

export default observer(BrokersSelectedCompany)
