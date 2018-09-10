import React from 'react'
import PropTypes from 'prop-types'
import { View, Image, StyleSheet } from 'react-native'
import { List, ListItem } from 'react-native-elements'
// const routes = ['Portfolio', 'Trending', 'Top Trades', 'Trade']
class SideBar extends React.Component {
  render() {
    let routes = this.props.routes ||['Portfolio', 'Trending', 'Top Trades', 'Trade']
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png'
            }}
            style={{
              height: 120,
              width: '100%',
              alignSelf: 'stretch',
              position: 'absolute'
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: 'absolute',
              alignSelf: 'center',
              top: 20
            }}
            source={{
              uri:
                'https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png'
            }}
          />
        </View>
        {/* <List
                    dataArray={routes}
                    contentContainerStyle={{ marginTop: 120 }}
                    renderRow={data => {
                        return (
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data)}
                            >
                                <Text>{data}</Text>
                            </ListItem>
                        )
                    }}
                /> */}
        <List>
          {routes.map(data => (
            <ListItem
              key={data}
              title={data}
              onPress={() => this.props.navigation.navigate(data)}
            />
          ))}
        </List>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 0.6,
    flexDirection: 'column'
  },
  header: {
    flex: 0.6
  }
})

SideBar.propTypes = {
  navigation: PropTypes.object
}
export default SideBar
