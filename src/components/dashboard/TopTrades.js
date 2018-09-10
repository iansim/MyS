import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Button } from 'react-native-elements'

const TopTrades = props => {
  return (
    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
      <View style={{ height:130,  flexDirection: 'row' }}>
        <Image
          square
          style={{
            height: 130,
            width: '40%',
            marginRight: 20
          }}
          source={{ uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg" }}
        />
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
          <View style={{paddingBottom:10 }}>
            <Text>Return Rate: 8700.87%</Text>
          </View>
          <View style={{paddingBottom:10 }}>
            <Text>Copier: 52</Text>
          </View>
          <View>
            <Button  title='Start Copy' marginLeft='0' />
          </View>
        </View>



      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <Text>right</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text>right</Text>
        </View>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  content: {
    width: '100%',
  },
  left: {
    width: '50%'
  },
  right: {
    width: '50%'
  }

})
TopTrades.propTypes = {
  state: PropTypes.object
}
export default observer(TopTrades)

