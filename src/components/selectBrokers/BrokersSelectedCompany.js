import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native'
import { Header, Icon, Button } from 'react-native-elements'

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
          placeholderTextColor="rgba(0,0,0,0.7)"
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
          placeholderTextColor="rgba(0,0,0,0.7)"
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
        />

        <TouchableOpacity style={styles.buttonContainer}>
          <Button
            title="Save"
            containerViewStyle={{width: '100%', marginLeft: 0, marginRight: 0}}
            buttonStyle={{
              width: '100%',
              backgroundColor: 'rgba(204, 204, 204, 1)',
              borderRadius: 5
            }}
            textStyle={{ fontSize: 13, color: 'white' }}
            onPress={() => {
              routerStore.goTo('dashboard')
            }}
            underlayColor="transparent"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    backgroundColor: 'white',
    height: '100%'
  },
  selectWrapper: {
    padding: 20
  },
  logoWrapper: {
    paddingBottom: 15
  },
  logo: {
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#ccc',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc'
  },
  buttonContainer: {
    alignItems: 'center'
  }
})

BrokersSelectedCompany.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(observer(BrokersSelectedCompany))
