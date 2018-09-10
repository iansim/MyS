import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { RouterView } from 'mobx-state-router'
import MainPage from './page/MainPage'
import SelectBrokersPageRouter from './page/SelectBrokersPageRouter'
import SelectBrokersCompanyPage from './page/SelectBrokersCompanyPage'
import TradeExecutionPage from './page/TradeExecutionPage'
import DashboardPageRouter from './page/DashboardPageRouter'

// import SettingPage from './page/SettingPage'
// import TraderPage from './page/TraderPage'
// import HomeScreenRouter from './page/HomeScreenRouter'
// import { Container } from 'native-base'

const viewMap = {
  main: <MainPage />,
  dashboard: <DashboardPageRouter />,
  selectBrokers: <SelectBrokersPageRouter />,
  selectBrokersCompany: <SelectBrokersCompanyPage />,
  tradeExecution: <TradeExecutionPage />
  // setting: <SettingPage />,
  // trader: <TraderPage />,
  // home: <HomeScreenRouter />
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
      routerStore.goTo('dashboard', this.props.params)
    }

    return (
      //       <View style={{backgroundColor: 'red'}}>
      //   <Header
      //   leftComponent={{ icon: 'menu', color: '#fff' }}
      //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      //   rightComponent={{ icon: 'home', color: '#fff' }}
      // />
      <RouterView routerStore={routerStore} viewMap={viewMap} />
    )
  }
}
ShellBase.propTypes = {
  rootStore: PropTypes.object,
  page: PropTypes.any,
  params: PropTypes.any
}
export const Shell = inject('rootStore')(ShellBase)
