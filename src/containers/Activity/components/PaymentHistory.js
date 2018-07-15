import React, { Component } from 'react';
import {
  View,
  Dimensions,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Swipeout from 'react-native-swipeout';
import { Icon } from 'react-native-elements';
import { dynamicSize, getFontSize } from '../../../helpers/DynamicSize';

const { width } = Dimensions.get('window');

const chatIcon = require('../../../assets/images/chatPNG.png');

class PaymentHistory extends Component {
  render() {
    const { activities } = this.props;
    const swipeoutBtns = [
      {
        component: <TouchableOpacity style={{ flex: 1, backgroundColor: '#2B72BF', justifyContent: 'center', alignItems: 'center' }} onPress={this.props.navigateToMessage}>
          <View style={{ flex: 1, backgroundColor: '#2B72BF', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={chatIcon} style={{ width: dynamicSize(22), height: dynamicSize(22) }} /><Text style={{ color: 'white', fontSize: dynamicSize(12), marginTop: dynamicSize(5) }}>Message</Text>
          </View>
        </TouchableOpacity>
      }
    ];
    return (
      <View>
        {activities
        .map((activity, index) => (
          <View key={index}>
            <View style={styles.dateView}>
              <Text style={styles.dateText}>
                {activity.date}
              </Text>
            </View>
            {activity.history
              .map((oneHistory, historyIndex) => (
                <Swipeout
                  key={historyIndex}
                  right={swipeoutBtns}
                  autoClose
                  close
                >
                  <View style={oneHistory.type === 'received' ? styles.historyReceiveView : styles.historyView}>
                    <View style={styles.avatarView}>
                      <Image source={oneHistory.avatar} style={styles.avatar} />
                    </View>
                    <View style={styles.nameView}>
                      <Text style={styles.fullname}>
                        {oneHistory.name}
                      </Text>
                      <Text style={styles.comment}>
                        {oneHistory.commnet}
                      </Text>
                    </View>
                    {oneHistory.type === 'sent' ?
                      <View style={styles.sentView}>
                        <Text style={styles.priceText}>
                          - ${oneHistory.price}
                        </Text>
                      </View>
                      :
                      oneHistory.type === 'request' ?
                        <View style={styles.requestView}>
                          <Text style={styles.priceText}>
                            ${oneHistory.price}
                          </Text>
                        </View>
                      :
                        <View style={styles.receiveView}>
                          <Text style={styles.priceText}>
                            +
                          </Text>
                        </View>
                    }
                    <View style={styles.iconView}>
                      <Icon
                        containerStyle={{ marginRight: dynamicSize(10) }}
                        name="chevron-right"
                        type="material"
                        color="#2B72BF"
                        size={30}
                      />
                    </View>
                  </View>
                </Swipeout>
              ))}
          </View>
      ))}
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: dynamicSize(20)
  },
  dateView: {
    width: width - dynamicSize(20),
    marginLeft: dynamicSize(10),
    padding: dynamicSize(10)
  },
  dateText: {
    fontSize: getFontSize(23),
    color: '#4A4A4A'
  },
  historyView: {
    flexDirection: 'row',
    padding: dynamicSize(20),
    backgroundColor: '#F9FBFD',
    alignItems: 'center'
  },
  historyReceiveView: {
    flexDirection: 'row',
    padding: dynamicSize(20),
    backgroundColor: '#ECF5FF',
    alignItems: 'center'
  },
  avatar: {
    width: dynamicSize(50),
    height: dynamicSize(50),
    borderRadius: dynamicSize(25)
  },
  nameView: {
    marginLeft: dynamicSize(10),
    justifyContent: 'center',
    width: width - dynamicSize(200)
  },
  fullname: {
    fontSize: getFontSize(14),
    color: '#000000'
  },
  comment: {
    fontSize: getFontSize(12),
    color: '#5F5F5F',
    marginTop: dynamicSize(5)
  },
  sentView: {
    backgroundColor: '#F34E63',
    width: dynamicSize(74),
    height: dynamicSize(26),
    justifyContent: 'center',
    alignItems: 'center'
  },
  requestView: {
    backgroundColor: '#DBECFF',
    width: dynamicSize(74),
    height: dynamicSize(26),
    justifyContent: 'center',
    alignItems: 'center'
  },
  receiveView: {
    backgroundColor: '#7ED321',
    width: dynamicSize(74),
    height: dynamicSize(26),
    justifyContent: 'center',
    alignItems: 'center'
  },
  priceText: {
    fontSize: getFontSize(14),
    color: '#FFFFFF',
  },
  iconView: {
    marginLeft: dynamicSize(10)
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(PaymentHistory);
