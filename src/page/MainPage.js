import React from 'react'
import PropTypes from 'prop-types'
import { inject } from 'mobx-react'
import Login from '../components/main/Login'

const MainPage = props => {
  const {
    rootStore: { routerStore }
  } = props

  return (
    <Login />
  )
}




MainPage.propTypes = {
  rootStore: PropTypes.object
}
export default inject('rootStore')(MainPage)
