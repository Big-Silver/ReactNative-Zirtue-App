import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import CustomHeader from '../components/header';

const { width } = Dimensions.get('window');
const shareIcon = require('../assets/images/shareIcon.png');
const emailIcon = require('../assets/images/emailIcon.png');
const facebookIcon = require('../assets/images/facebookIcon.png');

class ShareInvite extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  goInviteLink = () => {
    this.props.navigation.navigate('inviteLink');
  }

  render() {
    return (
      <View style={styles.content}>
        <CustomHeader
          title="Share Invite"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={styles.listview}>
          <TouchableOpacity style={styles.itemView} onPress={this.goInviteLink}>
            <View style={styles.iconView}>
              <Image source={emailIcon} style={styles.emailIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.shareText}>
                Send Invite on Email
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={facebookIcon} style={styles.inviteIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.shareText}>
                Invite from Facebook contacts
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={shareIcon} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.shareText}>
                Share Invite Link
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
    height: dynamicSize(300)
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
  email: {
    fontSize: getFontSize(14),
    color: 'white',
    marginTop: dynamicSize(5)
  },
  locationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dynamicSize(20)
  },
  location: {
    fontSize: getFontSize(14),
    color: 'white',
  },
  itemView: {
    width,
    height: dynamicSize(60),
    backgroundColor: '#F9FBFD',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F4',
    flexDirection: 'row',
  },
  iconView: {
    width: dynamicSize(60),
    height: dynamicSize(60),
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: dynamicSize(14),
    height: dynamicSize(20),
  },
  inviteIcon: {
    width: dynamicSize(20),
    height: dynamicSize(20),
  },
  textView: {
    justifyContent: 'center'
  },
  shareText: {
    fontSize: getFontSize(16),
    color: '#5F5F5F'
  },
  emailIcon: {
    width: dynamicSize(20),
    height: dynamicSize(15),
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(ShareInvite);
