import React from 'react'
import DashBoard from './DashBoard'
import TrendingPage from './TrendingPage'
import TopTradesPage from './TopTradesPage'
import TradePage from './TradePage'
import SideBar from './layout/SideBar'
import { createDrawerNavigator } from 'react-navigation'

const DashboardPageRouter = createDrawerNavigator(
  {
    Portfolio: { screen: DashBoard },
    Trending: { screen: TrendingPage },
    'Top Trades': { screen: TopTradesPage },
    Trade: { screen: TradePage }
  },
  {
    contentComponent: props => (
      <SideBar
        {...props}
        routes={['Portfolio', 'Trending', 'Top Trades', 'Trade']}
      />
    )
  },
  {
    initialRouteName: 'Home'
  }
)

export default DashboardPageRouter
