import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { StyleSheet, View, Image } from 'react-native'

const Trending = () => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.logo}>
        <Image source={require('../../images/investingnote.png')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15
  }
})
Trending.propTypes = {
  state: PropTypes.object
}
export default observer(Trending)
