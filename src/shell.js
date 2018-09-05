import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { RouterView } from 'mobx-state-router'
import MainPage from './page/MainPage'
import SelectBrokersPage from './page/SelectBrokersPage'
import DashBoard from './page/DashBoard'
import SettingPage from './page/SettingPage'
import TraderPage from './page/TraderPage'
import HomeScreenRouter from './page/HomeScreenRouter'
import { Container } from 'native-base'

const viewMap = {
  main: <MainPage />,
  dashboard: <DashBoard />,
  selectBrokers: <SelectBrokersPage />,
  setting: <SettingPage />,
  trader: <TraderPage />,
  home: <HomeScreenRouter />
}

class ShellBase extends React.Component {
  // render(){return <HomeScreenRouter/>}
  render() {
    const {
      rootStore: { routerStore }
    } = this.props
    if (this.props.page) {
      routerStore.goTo(this.props.page, this.props.params)
    } else {
      routerStore.goTo('home', this.props.params)
    }

    return (
      <Container>
        <RouterView routerStore={routerStore} viewMap={viewMap} />
      </Container>
    )
  }
}
ShellBase.propTypes = {
  rootStore: PropTypes.object,
  page: PropTypes.any,
  params: PropTypes.any
}
export const Shell = inject('rootStore')(ShellBase)
