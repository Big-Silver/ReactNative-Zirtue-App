import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import PaymentHistory from './components/PaymentHistory';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import { Color } from '../../constants';

const { width } = Dimensions.get('window');

const user1 = require('../../assets/images/user1.png');
const user2 = require('../../assets/images/user2.png');

const allActivities = [
  {
    date: 'Today',
    history: [
      {
        type: 'sent',
        avatar: user1,
        name: 'Adam N. Mathew',
        commnet: 'Payment Sent',
        price: '5.79'
      },
      {
        type: 'received',
        avatar: user2,
        name: 'Mother',
        commnet: 'Payment Received'
      }
    ]
  },
  {
    date: 'Apr 02',
    history: [
      {
        type: 'request',
        avatar: user1,
        name: 'Albert Wilson',
        commnet: 'Payment Request',
        price: '0.00'
      }
    ]
  },
  {
    date: 'Mar 28',
    history: [
      {
        type: 'sent',
        avatar: user1,
        name: 'Adam N. Mathew',
        commnet: 'Payment Sent',
        price: '5.79'
      },
      {
        type: 'sent',
        avatar: user1,
        name: 'Adam N. Mathew',
        commnet: 'Payment Sent',
        price: '5.79'
      }
    ]
  }
];

const receivedActivities = [
  {
    date: 'Today',
    history: [
      {
        type: 'received',
        avatar: user2,
        name: 'Mother',
        commnet: 'Payment Received'
      }
    ]
  }
];

const sentActivities = [
  {
    date: 'Today',
    history: [
      {
        type: 'sent',
        avatar: user1,
        name: 'Adam N. Mathew',
        commnet: 'Payment Sent',
        price: '5.79'
      },
    ]
  },
  {
    date: 'Mar 28',
    history: [
      {
        type: 'sent',
        avatar: user1,
        name: 'Adam N. Mathew',
        commnet: 'Payment Sent',
        price: '5.79'
      },
      {
        type: 'sent',
        avatar: user1,
        name: 'Adam N. Mathew',
        commnet: 'Payment Sent',
        price: '5.79'
      }
    ]
  }
];

class Activity extends Component {
  static navigationOptions = (props) => {
    return {
      title: 'Activity',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#2B72BF',
        height: dynamicSize(60)
      },
      headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.navigate('create_new_amount')}>
          <Icon
            containerStyle={{ marginRight: dynamicSize(10) }}
            iconStyle={{ marginLeft: dynamicSize(10) }}
            name="add"
            type="material"
            color="#fff"
            size={30}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity>
          <Icon
            containerStyle={{ marginRight: dynamicSize(10) }}
            iconStyle={{ marginLeft: dynamicSize(10) }}
            name="notifications"
            type="material"
            color="#fff"
            size={20}
          />
        </TouchableOpacity>
      ),
    };
  }

  state = {
    activityType: 'all'
  }

  onToggle(activityType) {
    this.setState({ activityType });
  }

  goMessage = () => {
    this.props.navigation.navigate('message');
  }

  render() {
    const { activityType } = this.state;
    return (
      <View style={styles.content}>
        <View style={styles.segmentView}>
          <View style={styles.toggleButtonView}>
            <TouchableOpacity
              onPress={this.onToggle.bind(this, 'all')}
              style={[styles.toggleButton, { backgroundColor: activityType === 'all' ? Color.blue : 'transparent' }]}
              >
              <Text style={{ color: activityType === 'all' ? Color.white : Color.text, fontSize: getFontSize(13) }}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onToggle.bind(this, 'received')}
              style={[styles.toggleButton1, { backgroundColor: activityType === 'received' ? Color.blue : 'transparent' }]}
              >
              <Text style={{ color: activityType === 'received' ? Color.white : Color.text, fontSize: getFontSize(13) }}>Payment Received</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.onToggle.bind(this, 'sent')}
              style={[styles.toggleButton2, { backgroundColor: activityType === 'sent' ? Color.blue : 'transparent' }]}
              >
              <Text style={{ color: activityType === 'sent' ? Color.white : Color.text, fontSize: getFontSize(13) }}>Payment Sent</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView style={styles.dataView}>
          {activityType === 'all' ?
            <PaymentHistory activities={allActivities} navigateToMessage={this.goMessage} />
            :
            activityType === 'received' ?
              <PaymentHistory activities={receivedActivities} navigateToMessage={this.goMessage} />
            :
              <PaymentHistory activities={sentActivities} navigateToMessage={this.goMessage} />
          }
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
  segmentView: {
    width,
    height: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dynamicSize(10),
    marginBottom: dynamicSize(10)
  },
  dataView: {
    flex: 1
    // marginTop: dynamicSize(20)
  },
  toggleButtonView: {
    backgroundColor: Color.light,
    padding: 4,
    flexDirection: 'row',
    width: dynamicSize(335),
    height: dynamicSize(40)
  },
  toggleButton: {
    width: dynamicSize(80),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  toggleButton1: {
    width: dynamicSize(140),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  toggleButton2: {
    width: dynamicSize(100),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6
  },
  authButton: {
    marginTop: dynamicSize(15)
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(Activity);
