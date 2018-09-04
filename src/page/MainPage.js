import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
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
import Login from '../components/main/Login'

const MainPage = props => {
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
          <Title>Main</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" />
          </Button>
        </Right>
      </Header>
      <Content style={{backgroundColor: '#237804'}}>
      <Button
        style={{position: 'absolute', top: 0, zIndex: 6}}
          onPress={() => {
            alert('This is Card Header')
            routerStore.goTo('selectBrokers')
          }}
        >
          <Text>Click Me!</Text>
        </Button>
        <Login />
        
      </Content>
    </Container>
  )
}




MainPage.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(MainPage)
