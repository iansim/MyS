import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, View, Image, TouchableOpacity, TextInput, StatusBar, Button } from 'react-native'
import {
  Header,
  Icon
} from 'react-native-elements'

const BrokersSelectedCompany = props => {
  // console.log(props)
  // let { state } = props;
  const {
    rootStore: { routerStore }
  } = props
  return (
    <View style={styles.contentWrapper}>
      <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              routerStore.goTo('selectBrokers')
            }}
          >
            <Icon color="#ffffff" name="navigate-before" />
          </TouchableOpacity>
        }
        centerComponent={{ text: 'Select Brokers', style: { color: '#fff' } }}
        rightComponent={
          <TouchableOpacity
            onPress={() => {
              routerStore.goTo('main')
            }}
          >
            <Icon color="#ffffff" name="home" />
          </TouchableOpacity>
        }
      />
    
      

      <View style={styles.selectWrapper}>
      <View style={styles.logoWrapper}>
      <Image
          style={styles.logo}
          source={require('../../images/cimb_securities.png')}
        />
      </View>

      <StatusBar barStyle="light-content" />
      <TextInput
        placeholder="Login ID or Email"
        style={styles.input}
        placeholderTextColor="rgba(255,255,255,0.7)"
        returnKeyType="next"
        onSubmitEditing={() => this.passwordInput.focus()}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="rgba(255,255,255,0.7)"
        returnKeyType="go"
        ref={input => (this.passwordInput = input)}
      />

      <TouchableOpacity style={styles.buttonContainer}>
        <Button
          small
          title="Save"
          color="#ffffff"
          onPress={() => {
            routerStore.goTo('dashboard')
          }}
          style={styles.buttonText}
        >
          Save
        </Button>
      </TouchableOpacity>
    </View>


    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: '#ccc', 
    height: '100%',
  },
  selectWrapper: {
    padding: 20,
  },
  logoWrapper: {
    paddingBottom: 15,
  },
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#fff',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    backgroundColor: '#000',
    opacity: 0.9,
    height: 40,
    marginTop: 0,
    paddingTop: 0
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700'
  }
})

BrokersSelectedCompany.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(observer(BrokersSelectedCompany))
