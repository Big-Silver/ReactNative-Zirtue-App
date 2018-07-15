import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { Icon } from 'react-native-elements';
import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import CustomHeader from '../components/header';

const { width } = Dimensions.get('window');
const badgeNotificationPush = require('../assets/images/badge_notification-push.png');
const badgeMessage = require('../assets/images/badge_message.png');
const badgeEmail = require('../assets/images/badge_email.png');

class Notifications extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onSendLink() {

  }

  goPush = () => {
    this.props.navigation.navigate('pushNotifications');
  }

  goText = () => {
    this.props.navigation.navigate('textNotification');
  }

  goEmail = () => {
    this.props.navigation.navigate('emailNotification');
  }

  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Notifications"
          left="Settings"
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={styles.content}>
          <TouchableOpacity style={styles.itemView} onPress={this.goPush}>
            <View style={styles.iconView}>
              <Image source={badgeNotificationPush} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Push Notifications
                </Text>
              </View>
              <View style={styles.secondView}>
                <Icon
                  name="chevron-right"
                  type="material"
                  color="gray"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView} onPress={this.goText}>
            <View style={styles.iconView}>
              <Image source={badgeMessage} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Text Notifications
                </Text>
              </View>
              <View style={styles.secondView}>
                <Icon
                  name="chevron-right"
                  type="material"
                  color="gray"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView} onPress={this.goEmail}>
            <View style={styles.iconView}>
              <Image source={badgeEmail} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Email Notifications
                </Text>
              </View>
              <View style={styles.secondView}>
                <Icon
                  name="chevron-right"
                  type="material"
                  color="gray"
                  size={30}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Color.white,
    flex: 1,
  },
  content: {
    // flex: 1,
  },
  titleView: {
    width,
    height: dynamicSize(44),
    backgroundColor: '#EFEFF4',
    justifyContent: 'center'
  },
  title: {
    fontSize: getFontSize(17),
    color: '#030303',
    paddingLeft: dynamicSize(20)
  },
  itemView: {
    width,
    height: dynamicSize(50),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F4',
    flexDirection: 'row',
  },
  iconView: {
    width: dynamicSize(60),
    height: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: dynamicSize(29),
    height: dynamicSize(29),
  },
  textView: {
    justifyContent: 'center',
    flexDirection: 'row'
  },
  shareText: {
    fontSize: getFontSize(17),
    color: '#000000',
  },
  firstView: {
    width: width - dynamicSize(110),
    justifyContent: 'center',
  },
  secondView: {
    width: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteView: {
    height: dynamicSize(60),
    backgroundColor: 'white'
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(Notifications);
