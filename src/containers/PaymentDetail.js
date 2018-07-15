import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

const { width } = Dimensions.get('window');
const blueBG = require('../assets/images/blueBG.png');
const user2 = require('../assets/images/user2.png');
const moneyIcon = require('../assets/images/moneyIcon.png');
const homeIcon = require('../assets/images/homeIcon.png');
const timerIcon = require('../assets/images/timerIcon.png');
const payoffIcon = require('../assets/images/payoffIcon.png');

class PaymentDetail extends Component {
  static navigationOptions = (props) => {
    return {
      title: 'Payment Details',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#2B72BF',
        height: dynamicSize(60),
        borderBottomWidth: 0
      },
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Icon
            containerStyle={{ marginRight: dynamicSize(10) }}
            iconStyle={{ marginLeft: dynamicSize(10) }}
            name="chevron-left"
            type="material"
            color="#fff"
            size={30}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        null
      ),
    };
  }

  state = {
  }

  goManualPayment = () => {
    this.props.navigation.navigate('manualPayment');
  }

  goOfflinePayment = () => {
    this.props.navigation.navigate('offlinePayment');
  }

  goPayoff = () => {
    this.props.navigation.navigate('payoff');
  }

  render() {
    return (
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.listview}>
          <ImageBackground source={blueBG} style={styles.topView}>
            <View style={styles.topImageView}>
              <View>
                <Image source={user2} style={styles.userIcon} />
              </View>
              <View style={styles.nameView}>
                <Text style={styles.name}>
                  Amanda
                </Text>
              </View>
              <View>
                <Text style={styles.name}>
                  Doe
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.mainView}>
            <View style={styles.titleView}>
              <Text style={styles.bigTitle}>
                Info
              </Text>
            </View>
            <View style={styles.contentView}>
              <View>
                <Text style={styles.title}>
                  Request:
                </Text>
              </View>
              <View>
                <Text style={styles.value}>
                  1
                </Text>
              </View>
            </View>
            <View style={styles.contentView}>
              <View>
                <Text style={styles.title}>
                  Approval Date:
                </Text>
              </View>
              <View>
                <Text style={styles.date}>
                  Mar 24, 2018
                </Text>
              </View>
            </View>
            <View style={styles.contentBottomView}>
              <View>
                <Text style={styles.title}>
                  Request Amount:
                </Text>
              </View>
              <View>
                <Text style={styles.amount}>
                  $100
                </Text>
              </View>
            </View>
            <View style={styles.titleView}>
              <Text style={styles.bigTitle}>
                Payment History
              </Text>
            </View>
            <View style={styles.contentBottomView}>
              <View style={styles.flexView}>
                <View>
                  <Text style={styles.title}>
                    Total Paid:
                  </Text>
                </View>
                <View>
                  <Text style={styles.amount}>
                    30
                  </Text>
                </View>
              </View>
              <View style={styles.flexView}>
                <View>
                  <Text style={styles.title}>
                    Payoff Amount:
                  </Text>
                </View>
                <View>
                  <Text style={styles.amount}>
                    70
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.paymentHistoryView}>
              <View style={styles.imageParentView}>
                <Image source={moneyIcon} style={styles.moneyIcon} />
              </View>
              <View>
                <View style={styles.flexOneView}>
                  <Text style={styles.blackText}>
                    Date:
                  </Text>
                  <Text style={styles.date}>
                    Mar 02, 2018
                  </Text>
                </View>
                <View style={styles.flexOneView}>
                  <Text style={styles.blackText}>
                    Amount
                  </Text>
                  <Text style={styles.amount}>
                    $10
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.paymentHistoryView}>
              <View style={styles.imageParentView}>
                <Image source={moneyIcon} style={styles.moneyIcon} />
              </View>
              <View>
                <View style={styles.flexOneView}>
                  <Text style={styles.blackText}>
                    Date:
                  </Text>
                  <Text style={styles.date}>
                    Mar 24, 2018
                  </Text>
                </View>
                <View style={styles.flexOneView}>
                  <Text style={styles.blackText}>
                    Amount
                  </Text>
                  <Text style={styles.amount}>
                    $20
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.btnGroup}>
              <TouchableOpacity style={styles.manualBtn} onPress={this.goManualPayment}>
                <View>
                  <Image source={homeIcon} style={styles.homeIcon} />
                </View>
                <Text style={styles.whiteText}>
                  Manual Payment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.offlineBtn} onPress={this.goOfflinePayment}>
                <View>
                  <Image source={timerIcon} style={styles.offlineIcon} />
                </View>
                <Text style={styles.whiteText}>
                  Offline Payment
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.payoffBtn} onPress={this.goPayoff}>
                <View>
                  <Image source={payoffIcon} style={styles.payoffIcon} />
                </View>
                <Text style={styles.whiteText}>
                  Payoff
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  content: {
    flex: 1,
    backgroundColor: 'white'
  },
  listview: {
    width,
  },
  topView: {
    width,
    height: dynamicSize(200)
  },
  topImageView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userIcon: {
    width: dynamicSize(110),
    height: dynamicSize(110)
  },
  nameView: {
    marginTop: dynamicSize(10)
  },
  name: {
    fontSize: getFontSize(20),
    color: 'white'
  },
  mainView: {
    width: width - dynamicSize(40),
    marginLeft: dynamicSize(20),
    marginTop: dynamicSize(20)
  },
  bigTitle: {
    fontSize: getFontSize(23),
    color: '#4A4A4A'
  },
  titleView: {
    marginTop: dynamicSize(20),
    marginBottom: dynamicSize(10)
  },
  contentView: {
    width: width - dynamicSize(40),
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F4',
    flexDirection: 'row',
    height: dynamicSize(60),
    alignItems: 'center'
  },
  contentBottomView: {
    width: width - dynamicSize(40),
    borderBottomWidth: 0,
    flexDirection: 'row',
    height: dynamicSize(60),
    alignItems: 'center'
  },
  paymentHistoryView: {
    width: width - dynamicSize(40),
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F4',
    flexDirection: 'row',
    height: dynamicSize(80),
    alignItems: 'center'
  },
  title: {
    fontSize: getFontSize(14),
    color: '#000000'
  },
  value: {
    fontSize: getFontSize(16),
    color: '#2B72BF',
    paddingLeft: dynamicSize(10)
  },
  date: {
    fontSize: getFontSize(14),
    color: '#5F5F5F',
    paddingLeft: dynamicSize(10)
  },
  amount: {
    fontSize: getFontSize(14),
    color: '#417505',
    paddingLeft: dynamicSize(10)
  },
  flexView: {
    flexDirection: 'row',
    marginRight: dynamicSize(30)
  },
  flexOneView: {
    flexDirection: 'row',
    marginRight: dynamicSize(30),
    marginTop: dynamicSize(10)
  },
  moneyIcon: {
    width: dynamicSize(48),
    height: dynamicSize(48)
  },
  blackText: {
    fontSize: getFontSize(14),
    color: '#000000',
    paddingLeft: dynamicSize(10)
  },
  imageParentView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dynamicSize(10)
  },
  btnGroup: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dynamicSize(10),
    marginBottom: dynamicSize(10)
  },
  manualBtn: {
    width: dynamicSize(275),
    height: dynamicSize(50),
    backgroundColor: '#1890FF',
    marginTop: dynamicSize(20),
    borderRadius: dynamicSize(6),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  offlineBtn: {
    width: dynamicSize(275),
    height: dynamicSize(50),
    backgroundColor: '#2B72BF',
    marginTop: dynamicSize(20),
    borderRadius: dynamicSize(6),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  payoffBtn: {
    width: dynamicSize(275),
    height: dynamicSize(50),
    backgroundColor: '#7ED321',
    marginTop: dynamicSize(20),
    borderRadius: dynamicSize(6),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  homeIcon: {
    width: dynamicSize(15),
    height: dynamicSize(18)
  },
  offlineIcon: {
    width: dynamicSize(16),
    height: dynamicSize(18)
  },
  payoffIcon: {
    width: dynamicSize(18),
    height: dynamicSize(16)
  },
  whiteText: {
    fontSize: getFontSize(15),
    color: '#FFFFFF',
    marginLeft: dynamicSize(10)
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(PaymentDetail);
