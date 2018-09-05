import React from 'react'
import HomeScreen from './HomeScreen.js'
import SideBar from './layout/SideBar.js'
import TraderPage from './TraderPage'
import { createDrawerNavigator } from 'react-navigation'

const MainPageRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Chat: { screen: HomeScreen },
    Profile: { screen: TraderPage }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
)
export default MainPageRouter
