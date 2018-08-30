import React, { Component } from 'react';
import { Container, Icon, Header, Content, ListItem, CheckBox, Text, Body, Left, Button, Title, Right } from 'native-base';

class DashBoard extends Component {

    render() {
        return (<Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                        <Icon name='menu' />
                    </Button>
                </Right>
            </Header>
            <Text>Haha</Text></Container>);
    }
}
export default DashBoard;