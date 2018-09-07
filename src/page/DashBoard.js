import React from 'react'
import { inject } from 'mobx-react'
import { View } from 'react-native'

// class DashBoard extends Component {
const DashBoard = () => {
  // let { state: {tabAppStockPortfolio} } = DashBoardStore
  // let DashBoardStoreProps = { DashBoardStore: toJS(DashBoardStore)}

  return <View />
}
export default inject('rootStore')(DashBoard)
