import React from 'react'
import { observer } from 'mobx-react'
import { inject } from 'mobx-react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import {
  Card,
  Button,
  Header,
  FormLabel,
  FormInput,
  FormValidationMessage,
  Icon
} from 'react-native-elements'

const BrokersSelectedCompany = props => {
  // console.log(props)
  // let { state } = props;
  const {
    rootStore: { routerStore }
  } = props
  return (
    <View>
      <Header
        leftComponent={
          <TouchableOpacity 
          onPress={() => {
            routerStore.goTo('selectBrokers')
          }
          }>
          <Icon color='#ffffff' name="navigate-before" />
        </TouchableOpacity>             
        }
        centerComponent={{ text: 'Select Brokers', style: { color: '#fff' } }}
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
      <Card>
      <Image
        style={styles.logo}
        source={require('../../images/cimb_securities.png')}
      />
        <FormLabel>User ID</FormLabel>
        <FormInput />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <FormLabel>Name</FormLabel>
        <FormInput />
        {/* <FormValidationMessage>Error message</FormValidationMessage> */}

        <View style={styles.buttonSubmit}>
        <Button
          title="Submit"
          color="#fff"
          buttonStyle={{ backgroundColor: 'rgba(0, 68, 94, 1)' }}
          onPress={() => {
            routerStore.goTo('tradeExecution')
          }}
          />  
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonSubmit: {
    marginTop: 25,
  }
})

export default inject('rootStore')(observer(BrokersSelectedCompany))