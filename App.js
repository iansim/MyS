/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import SplashScreen from 'react-native-splash-screen'
import {configure} from 'mobx'
import {Provider} from 'mobx-react'
import {Shell} from './src/shell'
import {RootStore} from './src/shared/utils/RootStore'

configure({isolatedGlobalState: true})

const rootStore = new RootStore()
const stores = {
  rootStore,
}
configure({isolatedGlobalState: true})

export default class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide()
    }, 2000)
  }

  render() {
    return (
      <Provider {...stores}>
        <Shell {...this.props} />
      </Provider>
    )
  }
}
