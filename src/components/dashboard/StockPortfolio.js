import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Divider, Card, Button } from 'react-native-elements'

// import { Content, Tabs, Tab, ScrollableTab, Text } from 'native-base'

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
    <ScrollView>
    <View style={styles.contentWrapper}>
      <View style={styles.pieChart}>
        <Text style={styles.title}>Pie Chart</Text>
        <PieChart style={{ height: 200 }} data={pieData} />
      </View>
      <Divider style={styles.divider} />
      <View style={styles.recentTradesWrapper}>
        <Text style={styles.titleRecentTrades}>Recent Trades</Text>
        <Text>See recent trades</Text>
      </View>
      <Divider style={styles.divider} />

      <View style={styles.latestNewsWrapper}>
        <Text style={styles.titleLatestNews}>Latest News</Text>
      </View>

      <Card stye={{backgroundColor: 'red'}}>
        <View>
          <Text style={styles.newsDate}>07 Sep 2018</Text>
          <Text style={styles.newsDate}>Ascendas REIT Completes The Acquisition Of No. 1-7 Wayne Goss Drive In Brisbane, Australia For A$30.0 Million</Text>
          <Button
          style={{marginTop: 15}}
          title="Read More"
          buttonStyle={{ backgroundColor: 'rgba(0, 68, 94, 1)' }}
          onPress={() => {
            routerStore.goTo('dashboard')
          }}
        />
   
        </View>
      </Card>







    </View>
    </ScrollView>
    // <Content>
    //   {/* <Text>
    // This is my portfolio
    // </Text> */}
    //   <Tabs renderTabBar={() => <ScrollableTab />}>
    //     {/* <Tab heading="Stock Portfolio">
    //         <View>
    //         {
    //           // console.warn(state.tttt)
    //           state.contents.map((item)=>{
    //             return <Text key={item} style={{}}>{item}</Text>
    //           })
    //         }
    //         <Text>{state.tabAppStockPortfolio.content}</Text>
    //       </View>
    //       </Tab> */}
    //     <Tab heading="Portfolio">
    //       <Text style={styles.tabsContent}>{state.tabDashBoard.portfolio}</Text>
    //       <PieChart style={{ height: 200 }} data={pieData} />
    //     </Tab>
    //     <Tab heading="Trending">
    //       <Text style={styles.tabsContent}>{state.tabDashBoard.trending}</Text>
    //     </Tab>
    //     <Tab heading="Top Trader">
    //       <Text style={styles.tabsContent}>{state.tabDashBoard.topTrader}</Text>
    //     </Tab>
    //     <Tab heading="Trade">
    //       <Text style={styles.tabsContent}>{state.tabDashBoard.trade}</Text>
    //     </Tab>
    //   </Tabs>
    // </Content>
  )
}

const styles = StyleSheet.create({
  contentWrapper: {
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20
  },
  recentTradesWrapper: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  divider: {
    backgroundColor: '#ccc',
    marginTop: 30,
  },
  titleRecentTrades: {
    fontSize: 24,
    marginBottom: 20
  },
  latestNewsWrapper: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  titleLatestNews: {
    fontSize: 24,
  }

})
StockPortfolio.propTypes = {
  state: PropTypes.object
}
export default observer(StockPortfolio)
