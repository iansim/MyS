import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Button } from 'react-native-elements'

const Trending = () => {
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
      <Button
        backgroundColor="#03A9F4"
        buttonStyle={{
          borderRadius: 0,
          marginLeft: 0,
          marginRight: 0,
          marginBottom: 0
        }}
        title="View Now"
      />
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
  }
})
Trending.propTypes = {
  state: PropTypes.object
}
export default observer(Trending)
