import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet } from 'react-native'
import { View, Text, List, ListItem, Icon, Left, Right } from 'native-base'

const BrokersSelected = () => {
  // console.log(props)
  // let { state } = props;

  return (
    <View style={styles.content}>
      <Text style={styles.brokerText}>
        Click on your brokers to add to the App.
      </Text>
      <List>
        <ListItem style={{ borderBottomColor: 'red' }}>
          <Left>
            <Text>CIMB Securities</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Citibank</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>

        <ListItem>
          <Left>
            <Text>DBS Vickers</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>

        <ListItem>
          <Left>
            <Text>KGI Connex</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>

        <ListItem>
          <Left>
            <Text>Lim & Tan Securities</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Maybank Kim Eng</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>OCBC Securities</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>Phillips Securities</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem>
          <Left>
            <Text>RHB Securities</Text>
          </Left>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </List>
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10
  },
  brokerText: {
    marginTop: 10,
    marginBottom: 10
  }
})

export default observer(BrokersSelected)
