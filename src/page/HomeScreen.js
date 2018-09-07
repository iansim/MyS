import React from 'react'
import PropTypes from 'prop-types'
import { DrawerActions } from 'react-navigation'
//this.props.navigation.dispatch(DrawerActions.closeDrawer())
class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => {
                this.props.navigation.dispatch(DrawerActions.openDrawer())
              }}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('Chat')}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate('ProfileScreen')}
          >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}
HomeScreen.propTypes = {
  navigation: PropTypes.object
}
export default HomeScreen
