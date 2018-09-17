import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'

const Trending = props => {
  const {
    rootStore: { routerStore }
  } = props

  return (
    <View style={styles.trendingWrapper}>
      <Image
        resizeMode="stretch"
        style={styles.logo}
        source={require('../../images/investingnote.png')}
      />
      <Text style={styles.desc}>
        Participate in market discussions, exchange investment ideas, share
        trading advice and connect with expert investors. Allowing our users to
        share and learn together is at the heart of what we do.
      </Text>
      <TouchableOpacity style={styles.buttonContainer}>
        <Button
          title="View Now"
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
  )
}

const styles = StyleSheet.create({
  trendingWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 15
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '100%'
  },
  desc: {
    marginVertical: 20,
    marginHorizontal: 5,
    textAlign: 'justify'
  },
  buttonContainer: {
    alignItems: 'center'
  }
})

Trending.propTypes = {
  state: PropTypes.object,
  rootStore: PropTypes.object
}

export default inject('rootStore')(observer(Trending))

