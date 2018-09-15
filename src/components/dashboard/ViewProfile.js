import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native'
import { Button, Avatar, Divider, Header, Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Ionicons'

const ViewProfile = (props) => {
  const {
    rootStore: { routerStore }
  } = props

  return (
    <View
    style={{
      flex: 1
    }}
  >
  <Header
        leftComponent={
          <TouchableOpacity
            onPress={() => {
              routerStore.goTo('dashboard', {section: 'Top Trades'})
            }}
          >
            <Icon color="#ffffff" name="navigate-before" />
          </TouchableOpacity>
        }
        centerComponent={{ text: 'Trade Execution', style: { color: '#fff' } }}
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
    <ScrollView style={{ backgroundColor: '#F1F0F1' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          marginHorizontal: 10,
          height: 180,
          marginBottom: 10
        }}
      >
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Avatar
              width={145}
              height={145}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
              }}
              activeOpacity={0.7}
              avatarStyle={{ borderRadius: 145 / 2 }}
              overlayContainerStyle={{ backgroundColor: 'transparent' }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 10
            }}
          >
            <View style={{ flex: 1, marginTop: 10, justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'rgba(98,93,144,1)',
                  marginLeft: -15
                }}
              >
                Amy Han
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.tradesDetails}>
        <View style={styles.leftContainer}>
          <Text style={[styles.text, { textAlign: 'left' }]}>Return(%)</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightIcon} />
          <Text>12.00</Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: '#ccc' }} />
      <View style={styles.tradesDetails}>
        <View style={styles.leftContainer}>
          <Text style={[styles.text, { textAlign: 'left' }]}>
            Recent Trades
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightIcon} />
          <Text>12.00</Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: '#ccc' }} />
      <View style={styles.tradesDetails}>
        <View style={styles.leftContainer}>
          <Text style={[styles.text, { textAlign: 'left' }]}>
            Investment Style
          </Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightIcon} />
          <Text>12.00</Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: '#ccc' }} />
      <View style={styles.tradesDetails}>
        <View style={styles.leftContainer}>
          <Text style={[styles.text, { textAlign: 'left' }]}>Risk</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightIcon} />
          <Text>12.00</Text>
        </View>
      </View>
      <Divider style={{ backgroundColor: '#ccc' }} />

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20
        }}
      >
        <Button
          title="Follow Me"
          buttonStyle={{
            width: 120,
            backgroundColor: 'rgba(113, 154, 112, 1)',
            borderRadius: 5
          }}
          titleStyle={{ fontSize: 13, color: 'white' }}
          // onPress={() => console.log('aye')}
          underlayColor="transparent"
        />
      </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  tradesDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor: 'blue',
  },
  leftContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // backgroundColor: 'green',
    paddingVertical: 15,
    paddingLeft: 15
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
    paddingVertical: 15,
    paddingRight: 15
  },
  rightIcon: {
    resizeMode: 'contain'
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

ViewProfile.propTypes = {
  rootStore: PropTypes.object
}

export default inject('rootStore')(observer(ViewProfile))
// ViewProfile.propTypes = {
//   state: PropTypes.object
// }
// export default observer(ViewProfile)
