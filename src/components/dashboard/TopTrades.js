import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { StyleSheet, View, Text } from 'react-native'
import { Divider, Card, Button, Avatar } from 'react-native-elements'

const TopTrades = props => {
  return (
    <View style={styles.contentWrapper}>
      <Avatar
        large
        source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
      />
      <View style="styles.content">
      <View style="styles.left">
      <Text>Left</Text>
      </View>
      <View style="styles.right">
      <Text>right</Text>
      </View>
      </View>

  <View style={{flex:1}}>
 <View style={{flex:2}}>
 <Text>right</Text>
</View>
<View style={{flex:2}}>
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

