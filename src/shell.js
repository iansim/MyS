import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { RouterView } from 'mobx-state-router'
import MainPage from './page/MainPage'
import SelectBrokersPageRouter from './page/SelectBrokersPageRouter'
import SelectBrokersCompanyPage from './page/SelectBrokersCompanyPage'
import TradeExecutionPage from './page/TradeExecutionPage'
import TradeExecutionOptionPage from './page/TradeExecutionOptionPage'
import DashboardPageRouter from './page/DashboardPageRouter'
import ViewProfile from './components/dashboard/ViewProfile'

// import TraderPage from './page/TraderPage'
// import HomeScreenRouter from './page/HomeScreenRouter'
// import { Container } from 'native-base'

const viewMap = {
  main: <MainPage />,
  dashboard: <DashboardPageRouter />,
  selectBrokers: <SelectBrokersPageRouter />,
  selectBrokersCompany: <SelectBrokersCompanyPage />,
  tradeExecution: <TradeExecutionPage />,
  tradeExecutionOption: <TradeExecutionOptionPage />,
  ViewProfile: <ViewProfile />
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

    return <RouterView routerStore={routerStore} viewMap={viewMap} />
  }
}
ShellBase.propTypes = {
  rootStore: PropTypes.object,
  page: PropTypes.any,
  params: PropTypes.any
}
export const Shell = inject('rootStore')(ShellBase)
