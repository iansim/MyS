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
  const portfolioData = [
    { name: 'Transportation/Storage/Communication', amount: 3500 },
    { name: 'Service', amount: 53000 },
    { name: 'Finance', amount: 2421 },
    { name: 'Manufacturing', amount: 5320 }
  ]
  // const data = [35, 53, 24, 50]
  const randomColor = () =>
    ('#' + ((Math.random() * 0xffffff) << 0).toString(16) + '000000').slice(
      0,
      7
    )
  // const color = []
  // for (let i = 0; i < data.length; i++) {
  //   color.push(randomColor())
  // }
  let portfolioTotal = 0
  for (let data of portfolioData) {
    data.color = randomColor()
    portfolioTotal = portfolioTotal + data.amount
  }

  // const pieData = data.filter(value => value > 0).map((value, index) => ({
  //   value,
  //   svg: {
  //     fill: color[index],
  //     onPress: () => alert('press' + index)
  //   },
  //   key: `pie-${index}`
  // }))

  const pieData = portfolioData.map(data => ({
    value: data.amount,
    svg: {
      fill: data.color,
      onPress: () =>
        alert(
          `${data.name} ${Math.round((data.amount * 100) / portfolioTotal)} % `
        )
    },
    key: `${data.name}`
  }))

  return (
    <ScrollView>
      <View style={styles.contentWrapper}>
        <View style={styles.pieChart}>
          <Text style={styles.title}>Pie Chart</Text>
          <PieChart style={{ height: 300 }} data={pieData} />
        </View>

        <View style={styles.legendWrapper}>
          {portfolioData.map(data => (
            <View key={data.name} style={styles.legendBar}>
              <View
                style={[styles.leftContainer, { backgroundColor: data.color }]}
              >
                <Text style={[styles.text, { textAlign: 'left' }]} />
              </View>
              <Text style={styles.text}>{data.name}</Text>
              <View style={styles.rightContainer}>
                <View style={styles.rightIcon}>
                  <Text>$ {data.amount}</Text>
                </View>
              </View>
            </View>
          ))}

          {/* <View style={styles.legendBar}>
            <View style={[styles.leftContainer, { backgroundColor: color[0] }]}>
              <Text style={[styles.text, { textAlign: 'left' }]} />
            </View>
            <Text style={styles.text}>
              Transportation/Storage/Communication
            </Text>
            <View style={styles.rightContainer}>
              <View style={styles.rightIcon}>
                <Text>0.35%</Text>
              </View>
            </View>
          </View> */}

          {/* <View style={styles.legendBar}>
            <View style={[styles.leftContainer, { backgroundColor: color[1] }]}>
              <Text style={[styles.text, { textAlign: 'left' }]} />
            </View>
            <Text style={styles.text}>Service</Text>
            <View style={styles.rightContainer}>
              <View style={styles.rightIcon}>
                <Text>0.59%</Text>
              </View>
            </View>
          </View> */}

          {/* <View style={styles.legendBar}>
            <View style={[styles.leftContainer, { backgroundColor: color[2] }]}>
              <Text style={[styles.text, { textAlign: 'left' }]} />
            </View>
            <Text style={styles.text}>Finance</Text>
            <View style={styles.rightContainer}>
              <View style={styles.rightIcon}>
                <Text>9.59%</Text>
              </View>
            </View>
          </View> */}

          {/* <View style={styles.legendBar}>
            <View style={[styles.leftContainer, { backgroundColor: color[3] }]}>
              <Text style={[styles.text, { textAlign: 'left' }]} />
            </View>
            <Text style={styles.text}>Manufacturing</Text>
            <View style={styles.rightContainer}>
              <View style={styles.rightIcon}>
                <Text>0.26%</Text>
              </View>
            </View>
          </View> */}
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
  legendWrapper: {
    paddingTop: 20
  },
  legendBar: {
    height: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'blue',
    marginHorizontal: 15
  },
  leftContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: 10,
    height: 10,
    marginRight: 10
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
    // backgroundColor: 'red',
  },
  rightIcon: {
    // height: 10,
    // width: 10,
    resizeMode: 'contain',
    backgroundColor: 'white'
  },
  contentWrapper: {
    paddingHorizontal: 0,
    paddingVertical: 10
  },
  title: {
    textAlign: 'left',
    fontSize: 24,
    marginBottom: 20,
    paddingHorizontal: 15
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
