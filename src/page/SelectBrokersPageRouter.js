import React from 'react'
import SelectBrokersPage from './SelectBrokersPage.js'
import SideBar from './layout/SideBar.js'
import { createDrawerNavigator } from 'react-navigation'

const SelectBrokersPageRouter = createDrawerNavigator(
  {
    Home: { screen: SelectBrokersPage },
    Chat: { screen: SelectBrokersPage },
    Profile: { screen: SelectBrokersPage }
  },
  {
    contentComponent: props => <SideBar {...props} />
  },
  {
    initialRouteName: 'Home'
  }
)
export default SelectBrokersPageRouter
