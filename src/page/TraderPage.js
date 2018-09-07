// import React from 'react'
// import PropTypes from 'prop-types'
// import { inject } from 'mobx-react'
// import {
//   Container,
//   Icon,
//   Header,
//   Content,
//   Text,
//   Body,
//   Left,
//   Button,
//   Title,
//   Right
// } from 'native-base'

// const TraderPage = props => {
//   const {
//     rootStore: { routerStore }
//   } = props

//   return (
//     <Container>
//       <Header>
//         <Left>
//           <Button transparent>
//             <Icon name="arrow-back" />
//           </Button>
//         </Left>
//         <Body>
//           <Title>Trade Execution</Title>
//         </Body>
//         <Right>
//           <Button transparent>
//             <Icon name="menu" />
//           </Button>
//         </Right>
//       </Header>
//       <Content>
//         <Button
//           onPress={() => {
//             alert('This is Card Header')
//             routerStore.goTo('dashboard')
//           }}
//         >
//           <Text>Click Me!</Text>
//         </Button>
//       </Content>
//     </Container>
//   )
// }
// TraderPage.propTypes = {
//   rootStore: PropTypes.object
// }
// export default inject('rootStore')(TraderPage)
