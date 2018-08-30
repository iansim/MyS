import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import { RouterView } from 'mobx-state-router'
import DashBoard from './page/DashBoard'
import { Container } from 'native-base';


const viewMap = {
  dashboard: <DashBoard />
}

class ShellBase extends React.Component {
  render() {
    const {
      rootStore: { routerStore }
    } = this.props
    if (this.props.page) {
      routerStore.goTo(this.props.page, this.props.params)
    }else{
      routerStore.goTo('dashboard', this.props.params)
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
