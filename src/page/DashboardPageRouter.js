import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import DashBoard from './DashBoard'
import TrendingPage from './TrendingPage'
import TopTradesPage from './TopTradesPage'
import TradePage from './TradePage'
// import ViewProfilePage from './ViewProfilePage'
import SideBar from './layout/SideBar'
import { createDrawerNavigator } from 'react-navigation'

// const DashboardPageRouter = createDrawerNavigator(
//   {
//     Portfolio: { screen: DashBoard },
//     Trending: { screen: TrendingPage },
//     'Top Trades': { screen: TopTradesPage },
//     Trade: { screen: TradePage },
//     // 'View Profile': { screen: ViewProfilePage }
//   },
//   {
//     contentComponent: props => (
//       <SideBar
//         {...props}
//         routes={[
//           'Portfolio',
//           'Trending',
//           'Top Trades',
//           'Trade',
//           // 'View Profile'
//         ]}
//       />
//     ),
//     initialRouteName: 'Trade'
//   }
// )
let DashboardPageRouterProxy = props => {
  const {
    rootStore: { routerStore }
  } = props
  const {
    routerState: { params }
  } = routerStore
  let MyPage = createDrawerNavigator(
    {
      Portfolio: { screen: DashBoard },
      Trending: { screen: TrendingPage },
      'Top Trades': { screen: TopTradesPage },
      Trade: { screen: TradePage }
      // 'View Profile': { screen: ViewProfilePage }
    },
    {
      contentComponent: props => (
        <SideBar
          {...props}
          routes={[
            'Portfolio',
            'Trending',
            'Top Trades',
            'Trade'
            // 'View Profile'
          ]}
        />
      ),
      initialRouteName: params.section || 'Portfolio'
    }
  )
  return <MyPage />
}

DashboardPageRouterProxy.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(DashboardPageRouterProxy)
