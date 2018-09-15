import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { View, Text, ScrollView } from 'react-native'
import { Button, Avatar, Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Ionicons'
// import Icon from 'react-native-vector-icons/dist/FontAwesome';
// Icon.loadFont()

const TopTrades = () => {
  return (
    //     <View
    //       style={{ flex: 1, flexDirection: 'column' }}
    //     >
    //       <View style={{ flexDirection: 'row' }}>
    //         <Image
    //           square
    //           style={{
    //             height: 150,
    //             width: '50%',
    //             marginRight: 20
    //           }}
    //           source={{
    //             uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    //           }}
    //         />
    //         <View
    //           style={{
    //             flex: 1,
    //             flexDirection: 'column',
    //             justifyContent: 'flex-end'
    //           }}
    //         >
    //           <View style={{ paddingBottom: 10 }}>
    //             <Text style={styles.name}>Amy Han</Text>
    //           </View>
    //           <View>
    //             <Button

    //               title="Following" />
    //           </View>
    //         </View>
    //       </View>

    // <View style={styles.tradesDetails}>
    //   <View style={styles.leftContainer}>
    //     <Text style={[styles.text, {textAlign: 'left'}]}>
    //       Return(%)
    //     </Text>
    //   </View>
    //   <View style={styles.rightContainer}>
    //     <View style={styles.rightIcon}/>
    //     <Text>12.00</Text>
    //   </View>
    // </View>
    // <Divider style={{backgroundColor: '#ccc'}} />
    // <View style={styles.tradesDetails}>
    //   <View style={styles.leftContainer}>
    //     <Text style={[styles.text, {textAlign: 'left'}]}>
    //       Recent Trades
    //     </Text>
    //   </View>
    //   <View style={styles.rightContainer}>
    //     <View style={styles.rightIcon}/>
    //     <Text>12.00</Text>
    //   </View>
    // </View>
    // <Divider style={{backgroundColor: '#ccc'}} />
    // <View style={styles.tradesDetails}>
    //   <View style={styles.leftContainer}>
    //     <Text style={[styles.text, {textAlign: 'left'}]}>
    //       Investment Style
    //     </Text>
    //   </View>
    //   <View style={styles.rightContainer}>
    //     <View style={styles.rightIcon}/>
    //     <Text>12.00</Text>
    //   </View>
    // </View>
    // <Divider style={{backgroundColor: '#ccc'}} />
    // <View style={styles.tradesDetails}>
    //   <View style={styles.leftContainer}>
    //     <Text style={[styles.text, {textAlign: 'left'}]}>
    //       Risk
    //     </Text>
    //   </View>
    //   <View style={styles.rightContainer}>
    //     <View style={styles.rightIcon}/>
    //     <Text>12.00</Text>
    //   </View>
    // </View>
    // </View>

    <ScrollView style={{ flex: 1, backgroundColor: '#F1F0F1' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          marginHorizontal: 10,
          height: 250,
          marginBottom: 10
        }}
      >
        <View style={{ flex: 3, flexDirection: 'row' }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Avatar
              width={145}
              height={145}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
              }}
              activeOpacity={0.7}
              avatarStyle={{ borderRadius: 145 / 2 }}
              overlayContainerStyle={{ backgroundColor: 'transparent' }}
            />
          </View>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <View style={{ flex: 1, marginTop: 10, justifyContent: 'center' }}>
              <Text
                style={{
                  fontSize: 25,
                  color: 'rgba(98,93,144,1)',
                  marginLeft: -15
                }}
              >
                Amy Han
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            width: 320,
            borderWidth: 0.5,
            borderColor: 'rgba(222, 223, 226, 1)',
            marginHorizontal: 20,
            height: 1,
            marginVertical: 10
          }}
        />
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ flex: 1 }}>
            <Button
              title="View Profile"
              buttonStyle={{
                width: 120,
                backgroundColor: 'rgba(222, 223, 226, 1)',
                borderRadius: 5
              }}
              titleStyle={{ fontSize: 13, color: 'gray' }}
              // onPress={() => console.log('aye')}
              underlayColor="transparent"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              title="Add User"
              buttonStyle={{
                width: 120,
                backgroundColor: 'rgba(113, 154, 112, 1)',
                borderRadius: 5
              }}
              titleStyle={{
                fontFamily: 'regular',
                fontSize: 13,
                color: 'white'
              }}
              // onPress={() => console.log('aye')}
              underlayColor="transparent"
            />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 60,
          marginHorizontal: 20,
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 15 }}>
            <Avatar
              small
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text style={{ fontSize: 15, marginLeft: 10, color: 'gray' }}>
            Ya Fei
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 10
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(220,230,218,1)',
              width: 70,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10
            }}
          >
            <Icon name='heartbeat' type='font-awesome' color="green" size={25} />
            <Text style={{ color: 'green', fontSize: 13, marginLeft: 5 }}>
              100
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(222,222,222,1)',
              width: 35,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10
            }}
          >
            <Icon name="md-person-add" color="gray" size={20} />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 60,
          marginHorizontal: 20,
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 15 }}>
            <Avatar
              small
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text style={{ fontSize: 15, marginLeft: 10, color: 'gray' }}>
            Lin Fei
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 10
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(220,230,218,1)',
              width: 70,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10
            }}
          >
            <Icon type='font-awesome' name="caret-up" color="green" size={25} />
            <Text style={{ color: 'green', fontSize: 13, marginLeft: 5 }}>
              1000
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(222,222,222,1)',
              width: 35,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10
            }}
          >
            <Icon type='material-community' name="account-plus" color="gray" size={20} />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 60,
          marginHorizontal: 20,
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 15 }}>
            <Avatar
              small
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text style={{ fontSize: 15, marginLeft: 10, color: 'gray' }}>
            Tony
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 10
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(220,230,218,1)',
              width: 70,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10
            }}
          >
            <Icon name="md-arrow-dropup" color="green" size={25} />
            <Text style={{ color: 'green', fontSize: 13, marginLeft: 5 }}>
              1000
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(222,222,222,1)',
              width: 35,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10
            }}
          >
            <Icon name="md-person-add" color="gray" size={20} />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 60,
          marginHorizontal: 20,
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 15 }}>
            <Avatar
              small
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/128.jpg'
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text style={{ fontSize: 15, marginLeft: 10, color: 'gray' }}>
            Kelly
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 10
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(220,230,218,1)',
              width: 70,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10
            }}
          >
            <Icon name="md-arrow-dropup" color="green" size={25} />
            <Text style={{ color: 'green', fontSize: 13, marginLeft: 5 }}>
              1000
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(222,222,222,1)',
              width: 35,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10
            }}
          >
            <Icon name="md-person-add" color="gray" size={20} />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 60,
          marginHorizontal: 20,
          marginTop: 10,
          backgroundColor: 'white',
          borderRadius: 5,
          alignItems: 'center',
          flexDirection: 'row'
        }}
      >
        <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ marginLeft: 15 }}>
            <Avatar
              small
              rounded
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/evagiselle/128.jpg'
              }}
              activeOpacity={0.7}
            />
          </View>
          <Text style={{ fontSize: 15, marginLeft: 10, color: 'gray' }}>
            Belly
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginRight: 10
          }}
        >
          <View
            style={{
              backgroundColor: 'rgba(220,230,218,1)',
              width: 70,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginLeft: 10
            }}
          >
            <Icon name="md-arrow-dropup" color="green" size={25} />
            <Text style={{ color: 'green', fontSize: 13, marginLeft: 5 }}>
              1000
            </Text>
          </View>
          <View
            style={{
              backgroundColor: 'rgba(222,222,222,1)',
              width: 35,
              height: 28,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10
            }}
          >
            <Icon name="md-person-add" color="gray" size={20} />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

TopTrades.propTypes = {
  state: PropTypes.object
}
export default observer(TopTrades)
