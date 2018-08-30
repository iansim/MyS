import React, { Component } from 'react'
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

class DashBoard extends Component {
  render() {
    const {
      rootStore: { routerStore }
    } = this.props

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>DashBoard</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Button
            onPress={() => {
              alert('This is Card Header')
              routerStore.goTo('setting')
            }}
          >
            <Text>Click Me!</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
DashBoard.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(DashBoard)
