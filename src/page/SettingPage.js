import React, { Component } from 'react';
import { observer, inject } from 'mobx-react'
import { Container, Icon, Header, Content, ListItem, CheckBox, Text, Body, Left, Button, Title, Right } from 'native-base';

class SettingPage extends Component {

    render() {
        const {
            rootStore: { routerStore }
        } = this.props

        return (<Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Setting</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
            <Content>
                <Button onPress={() => {alert("This is Card Header");routerStore.goTo('dashboard');}}>
                    <Text>Click Me!</Text>
                </Button>
            </Content></Container>);
    }
}
export default inject('rootStore')(SettingPage);