import React from 'react'
import PropTypes from 'prop-types'
import { observer, inject } from 'mobx-react'
import { StyleSheet, View, Text, ScrollView } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import { Divider, Card, Button } from 'react-native-elements'

// import { Content, Tabs, Tab, ScrollableTab, Text } from 'native-base'

const StockPortfolio = props => {
  const {
    rootStore: { routerStore }
  } = props

  const data = [35, 53, 24, 50]

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
          <PieChart style={{ height: 300 }} data={pieData} />
        </View>



<View style={styles.navBar}>
  <View style={styles.leftContainer}>
    <Text style={[styles.text, {textAlign: 'left'}]}>
    </Text>
  </View>
  <Text style={styles.text}>
  Transportation/Storage/Communication
  </Text>
  <View style={styles.rightContainer}>
    <View style={styles.rightIcon}>
      <Text>0.35%</Text>
    </View>
</View>
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

        <Card>
          <View
            onPress={() => {
              routerStore.goTo('dashboard')
            }}
          >
            <Text style={styles.newsDate}>07 Sep 2018</Text>
            <Text style={styles.newDetails}>
              Ascendas REIT Completes The Acquisition Of No. 1-7 Wayne Goss
              Drive In Brisbane, Australia For A$30.0 Million
            </Text>
          </View>
        </Card>
        <Card>
          <View
            onPress={() => {
              routerStore.goTo('dashboard')
            }}
          >
            <Text style={styles.newsDate}>07 Sep 2018</Text>
            <Text style={styles.newDetails}>
              Ascendas REIT Completes The Acquisition Of No. 1-7 Wayne Goss
              Drive In Brisbane, Australia For A$30.0 Million
            </Text>
          </View>
        </Card>
        <Card>
          <View
            onPress={() => {
              routerStore.goTo('dashboard')
            }}
          >
            <Text style={styles.newsDate}>07 Sep 2018</Text>
            <Text style={styles.newDetails}>
              Ascendas REIT Completes The Acquisition Of No. 1-7 Wayne Goss
              Drive In Brisbane, Australia For A$30.0 Million
            </Text>
          </View>
        </Card>
        <Card>
          <View
            onPress={() => {
              routerStore.goTo('dashboard')
            }}
          >
            <Text style={styles.newsDate}>07 Sep 2018</Text>
            <Text style={styles.newDetails}>
              Ascendas REIT Completes The Acquisition Of No. 1-7 Wayne Goss
              Drive In Brisbane, Australia For A$30.0 Million
            </Text>
          </View>
        </Card>
        <Card>
          <View
            onPress={() => {
              routerStore.goTo('dashboard')
            }}
          >
            <Text style={styles.newsDate}>07 Sep 2018</Text>
            <Text style={styles.newDetails}>
              Ascendas REIT Completes The Acquisition Of No. 1-7 Wayne Goss
              Drive In Brisbane, Australia For A$30.0 Million
            </Text>
          </View>
        </Card>
      </View>
      <Button
        style={{ marginTop: 15 }}
        title="Trade Execution"
        onPress={() => {
          routerStore.goTo('tradeExecution')
        }}
      />
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
  navBar: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
    margin: 15,
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: 'green',
    width: 10,
    height: 10,
    marginRight: 10,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  rightIcon: {
    // height: 10,
    // width: 10,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  contentWrapper: {
    paddingHorizontal: 0,
    paddingVertical: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginBottom: 20
  },
  recentTradesWrapper: {
    marginTop: 20,
    paddingHorizontal: 15
  },
  divider: {
    backgroundColor: '#ccc',
    marginTop: 30
  },
  titleRecentTrades: {
    fontSize: 24,
    marginBottom: 20
  },
  latestNewsWrapper: {
    marginTop: 20,
    paddingHorizontal: 15
  },
  titleLatestNews: {
    fontSize: 24
  },
  newsDate: {}
})
StockPortfolio.propTypes = {
  state: PropTypes.object,
  rootStore: PropTypes.object
}

export default inject('rootStore')(observer(StockPortfolio))
