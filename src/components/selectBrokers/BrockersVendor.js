import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet, Image } from 'react-native'
import { View, Text, Button, Item, Label, Form, Input } from 'native-base'

const BrokersVendor = (props) => {
  console.log(props)
  let { state } = props;

  return (
    <View style={styles.content}>
    <View style={styles.vendorContent}>
      <Image
        style={styles.logo}
        source={require('../../images/cimb_securities.png')} />
        <Form>
              <Item inlineLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item inlineLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
            </Form>
            <Button transparent>
              <Text>Submit</Text>
            </Button>
    </View>

      
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
  brokerText: {
    marginTop: 10,
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height:77
  }
})

export default observer(BrokersVendor)