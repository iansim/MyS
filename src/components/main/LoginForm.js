import React from 'react'
import { observer } from 'mobx-react'
import { StyleSheet } from 'react-native'
import {
  View,
  Text,
  Form, Item, Input, Label, Button
} from 'native-base'

const LoginForm = (props) => {
  return (
    <View style={styles.container}>
      <Form style={styles.form}>
        <Item floatingLabel>
          <Label style={styles.label}>User ID or email </Label>
          <Input style={styles.input} />
        </Item>
        <Item floatingLabel last>
          <Label style={styles.label}>Password</Label>
          <Input style={styles.input} />
        </Item>
      </Form>
      <Button style={styles.btnSubmit} block>
        <Text>Sign In</Text>
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  form: {
    color: '#fff'
  },
  label: {
    color: '#fff'
  },
  input: {
    color: '#fff'
  },
  btnSubmit: {
    marginTop: 20,
  }
  
})

export default observer(LoginForm)