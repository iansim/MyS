import { observable } from 'mobx'
const state = observable({
  tabDashBoard: {
    portfolio: 'This is my stock portfolio Table and pie chart',
    trending: 'Will link to InvestNote',
    topTrader: 'Top Trader',
    trade: 'Trade'
  }

  // recentTrader:['234','3345','eedfdf']
})
const actions = {}

export default { state, actions }
