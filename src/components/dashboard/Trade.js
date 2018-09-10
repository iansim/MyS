import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { View, Text } from 'react-native'

const Trade = () => {
  return (
    <View>
      <Text>Trade</Text>
    </View>
  )
}

Trade.propTypes = {
  state: PropTypes.object
}
export default observer(Trade)
