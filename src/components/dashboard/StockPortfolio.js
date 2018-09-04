import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { StyleSheet } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Content, Tabs, Tab, ScrollableTab, Text } from 'native-base'

const StockPortfolio = props => {
  let { state } = props

  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]

  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7
    )

  const pieData = data.filter(value => value > 0).map((value, index) => ({
    value,
    svg: {
      fill: randomColor(),
      onPress: () => alert('press' + index)
    },
    key: `pie-${index}`
  }))

  return (
    <Content>
      {/* <Text>
    This is my portfolio
    </Text> */}
      <Tabs renderTabBar={() => <ScrollableTab />}>
        {/* <Tab heading="Stock Portfolio">
            <View>
            {
              // console.warn(state.tttt)
              state.contents.map((item)=>{
                return <Text key={item} style={{}}>{item}</Text>
              })
            }
            <Text>{state.tabAppStockPortfolio.content}</Text>
          </View> 
          </Tab> */}
        <Tab heading="Portfolio">
          <Text style={styles.tabsContent}>{state.tabDashBoard.portfolio}</Text>
          <PieChart style={{ height: 200 }} data={pieData} />
        </Tab>
        <Tab heading="Trending">
          <Text style={styles.tabsContent}>{state.tabDashBoard.trending}</Text>
        </Tab>
        <Tab heading="Top Trader">
          <Text style={styles.tabsContent}>{state.tabDashBoard.topTrader}</Text>
        </Tab>
        <Tab heading="Trade">
          <Text style={styles.tabsContent}>{state.tabDashBoard.trade}</Text>
        </Tab>
      </Tabs>
    </Content>
  )
}

const styles = StyleSheet.create({
  tabsContent: {
    padding: 10
  }
})
StockPortfolio.propTypes = {
  state: PropTypes.object
}
export default observer(StockPortfolio)
