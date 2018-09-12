import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Button, Divider } from 'react-native-elements'

const TopTrades = () => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column' }}
    >
      <View style={{ height: 130, flexDirection: 'row' }}>
        <Image
          square
          style={{
            height: 130,
            width: '40%',
            marginRight: 20
          }}
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
          }}
        />
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'flex-end'
          }}
        >
          <View style={{ paddingBottom: 10 }}>
            <Text style={styles.name}>Amy Han</Text>
          </View>
          <View>
            <Button title="Following" marginLeft="0" />
          </View>
        </View>
      </View>

      {/* <View style={{ flex: 1 }}>
        <View style={{ flex: 2 }}>
          <Text>right</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Text>right</Text>
        </View>
      </View> */}


<View style={styles.tradesDetails}>
  <View style={styles.leftContainer}>
    <Text style={[styles.text, {textAlign: 'left'}]}>
      Return(%)
    </Text>
  </View>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}/>
    <Text>12.00</Text>
  </View>
</View>
<Divider style={{backgroundColor: '#ccc'}} />
<View style={styles.tradesDetails}>
  <View style={styles.leftContainer}>
    <Text style={[styles.text, {textAlign: 'left'}]}>
      Recent Trades
    </Text>
  </View>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}/>
    <Text>12.00</Text>
  </View>
</View>
<Divider style={{backgroundColor: '#ccc'}} />
<View style={styles.tradesDetails}>
  <View style={styles.leftContainer}>
    <Text style={[styles.text, {textAlign: 'left'}]}>
      Investment Style
    </Text>
  </View>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}/>
    <Text>12.00</Text>
  </View>
</View>
<Divider style={{backgroundColor: '#ccc'}} />
<View style={styles.tradesDetails}>
  <View style={styles.leftContainer}>
    <Text style={[styles.text, {textAlign: 'left'}]}>
      Risk
    </Text>
  </View>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}/>
    <Text>12.00</Text>
  </View>
</View>

    </View>
  )
}

const styles = StyleSheet.create({
  tradesDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  }
})

TopTrades.propTypes = {
  state: PropTypes.object
}
export default observer(TopTrades)
