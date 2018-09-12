import React from 'react'
import { observer } from 'mobx-react'
import { inject } from 'mobx-react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import { Header, Icon, Divider, Button } from 'react-native-elements'
import { Dropdown } from 'react-native-material-dropdown'


const TradeExecutionOption = props => {
  // console.log(props)
  // let { state } = props;  
  let dataTrader = [{
    value: 'Amy',
  }, {
    value: 'Vicky',
  }, {
    value: 'Tony',
  }]

  let dataTraderAmount = [{
    value: '1000',
  }, {
    value: '2000',
  }, {
    value: '3000',
  }, {
    value: '4000',
  }, {
    value: '5000',
  }, {
    value: '6000',
  }, {
    value: '7000',
  }, {
    value: '8000',
  }, {
    value: '9000',
  }, {
    value: '10000',
  }]

  let dataShare = [{
    value: '100',
  }, {
    value: '200',
  },{
    value: '300',
  },{
    value: '400',
  },{
    value: '500',
  },{
    value: '600',
  },{
    value: '700',
  },{
    value: '800',
  },{
    value: '900',
  },{
    value: '1000',
  }]

  let dataPrice = [{
    value: '100',
  }, {
    value: '500',
  }, {
    value: '1000',
  }]


  const {
    rootStore: { routerStore }
  } = props
  return (<View>
    <Header
      leftComponent={
        <TouchableOpacity 
          onPress={() => {
            routerStore.goTo('tradeExecution')
          }
        }>
        <Icon color='#ffffff' name="navigate-before" />
        </TouchableOpacity>             
      }
      centerComponent={{ text: 'Select Brokers', style: { color: '#fff' } }}
      rightComponent={
        <TouchableOpacity 
          onPress={() => {
            routerStore.goTo('main')
          }
        }>
          <Icon color='#ffffff' name="home" />
        </TouchableOpacity>   
        }
      />


<View style={styles.wrapper}>
<Text style={styles.optionA}>Option A</Text>
  <Text style={styles.formText}>Copy trade</Text>
  <TextInput
    placeholder="Input trade"
    style={styles.inputCopyTrade}
    placeholderTextColor="rgba(193,194,205,0.7)"
    autoCapitalize="none"
  />
<View>
<Dropdown
  style={styles.dropdown}
        label='Select trader'
        data={dataTrader}
      />
</View>
<Divider style={{ backgroundColor: 'transparent' }} />
<View>
<Dropdown
  style={styles.dropdown}
        label='Select trader'
        data={dataTraderAmount}
      />
</View>
<Divider style={{ backgroundColor: 'transparent' }} />
</View>

<Button
          style={{marginTop: 15}}
          buttonStyle={{ backgroundColor: 'rgba(0, 68, 94, 1)' }}
          title="Confirmation"
          onPress={() => {
            routerStore.goTo('')
          }}
        >
        </Button>


<View style={styles.wrapper}>
<Text style={styles.optionB}>Option B</Text>
<View>
<Dropdown
  style={styles.dropdown}
        label='Select share'
        data={dataShare}
      />
</View>
<Divider style={{ backgroundColor: 'transparent' }} />
<View>
<Dropdown
  style={styles.dropdown}
        label='Select Price'
        data={dataPrice}
      />
</View>
<Divider style={{ backgroundColor: 'transparent' }} />
<View>
<Dropdown
  style={styles.dropdown}
        label='Select amount'
        data={dataTraderAmount}
      />
</View>
<Divider style={{ backgroundColor: 'transparent' }} />
<View>
<Dropdown
  style={styles.dropdown}
        label='Select trader'
        data={dataTrader}
      />
</View>
<Divider style={{ backgroundColor: 'transparent' }} />
  </View>

<Button
          style={{marginTop: 15}}
          buttonStyle={{ backgroundColor: 'rgba(0, 68, 94, 1)' }}
          title="Confirmation"
          onPress={() => {
            routerStore.goTo('')
          }}
        >
        </Button>

    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 10
  },
  optionA: {
    marginBottom: 20,
    fontSize: 18
  },
  optionB: {
    fontSize: 18,
    paddingTop: 20
  },
  formText: {
    color: '#687987'
  },
  brokerText: {
    paddingHorizontal: 10,
    paddingTop: 17,
  },
  inputCopyTrade: {
    color: 'rgba(193,194,205,0.7)',
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 1,
    borderBottomColor: 'rgba(193,194,205,0.7)',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  buttonConfirmation: {
    marginTop: 20,
    width: '100%',
    paddingVertical: 0,

  }
})

export default inject('rootStore')(observer(TradeExecutionOption))
