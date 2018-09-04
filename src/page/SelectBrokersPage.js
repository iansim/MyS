import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { StyleSheet } from 'react-native'
import {
  Container,
  Icon,
  Header,
  Content,
  Text,
  Body,
  Left,
  Button,
  Title,
  Right
} from 'native-base'
import BrokersList from '../components/selectBrokers/BrokersList'
import BrokersSelected from '../components/selectBrokers/BrokersSelected'
import BrokersVendor from '../components/selectBrokers/BrockersVendor'

const SelectBrokersPage = props => {
  const {
    rootStore: { routerStore }
  } = props

  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Select Brokers</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content>
        <BrokersVendor />
        <BrokersList />
        <BrokersSelected />
        <Button
          onPress={() => {
            alert('This is Card Header')
            routerStore.goTo('trader')
          }}
        >
          <Text>Click Me!</Text>
        </Button>
      </Content>
    </Container>
  )
}

const styles = StyleSheet.create({
  


})


SelectBrokersPage.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(SelectBrokersPage)
