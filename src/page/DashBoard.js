import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import {toJS} from 'mobx'
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
import StockPortfolio from '../components/dashboard/StockPortfolio'
import DashBoardStore from '../store/DashBoardStore'

// class DashBoard extends Component {
const DashBoard = props => {
  const {
    rootStore: { routerStore }
  } = props
  console.log(props)

  let { state: {tabAppStockPortfolio} } = DashBoardStore
  let DashBoardStoreProps = { DashBoardStore: toJS(DashBoardStore)}
  console.log(DashBoardStoreProps)

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
      <StockPortfolio state={DashBoardStore.state} />
        <Button
          onPress={() => {
            alert('This is Card Header')
            routerStore.goTo('main')
            // routerStore.goTo('setting')
          }}
        >
          <Text>Click Me!</Text>
        </Button>
      </Content>
    </Container>
  )
}
DashBoard.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(DashBoard)
