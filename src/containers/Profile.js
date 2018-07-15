import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
  Share
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

const { width } = Dimensions.get('window');
const bigBlueBG = require('../assets/images/bigBlueBG.png');
const user2 = require('../assets/images/user2.png');
const shareIcon = require('../assets/images/shareIcon.png');
const inviteIcon = require('../assets/images/inviteIcon.png');
const settingIcon = require('../assets/images/settingIcon.png');
const helpIcon = require('../assets/images/helpIcon.png');
// const logout = require('../assets/images/logout.png');

class Profile extends Component {
  static navigationOptions = (props) => {
    return {
      title: '',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#2B72BF',
        height: dynamicSize(60),
        borderBottomWidth: 0
      },
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

  shareProfile = () => {
    Share.share({ message: 'test message', title: 'test title' }, { subject: 'test subject' });
  }

  goInviteFamily = () => {
    this.props.navigation.navigate('inviteFamily');
  }

  goSettings = () => {
    this.props.navigation.navigate('settings');
  }

  render() {
    return (
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.listview}>
          <ImageBackground source={bigBlueBG} style={styles.topView}>
            <View style={styles.topImageView}>
              <View>
                <Image source={user2} style={styles.userIcon} />
              </View>
              <View style={styles.nameView}>
                <Text style={styles.name}>
                  John
                </Text>
              </View>
              <View>
                <Text style={styles.name}>
                  Doe
                </Text>
              </View>
              <View>
                <Text style={styles.email}>
                  example@mail.com
                </Text>
              </View>
              <View>
                <Text style={styles.email}>
                  (201)123 4324 234
                </Text>
              </View>
              <View style={styles.locationView}>
                <Icon
                  name="place"
                  type="material"
                  color="#A2CBF6"
                  size={25}
                />
                <Text style={styles.location}>
                  Thomas Avenue,Dallas, TX, USA
                </Text>
              </View>
            </View>
          </ImageBackground>
          <TouchableOpacity style={styles.itemView} onPress={this.shareProfile}>
            <View style={styles.iconView}>
              <Image source={shareIcon} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.shareText}>
                Share Profile
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView} onPress={this.goInviteFamily}>
            <View style={styles.iconView}>
              <Image source={inviteIcon} style={styles.inviteIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.shareText}>
                Invite Framily
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView} onPress={this.goSettings}>
            <View style={styles.iconView}>
              <Image source={settingIcon} style={styles.inviteIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.shareText}>
                Settings
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={helpIcon} style={styles.inviteIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.shareText}>
                Help
              </Text>
            </View>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.itemView} onPress={this.signOut}>
            <View style={styles.iconView}>
              <Image source={logout} style={styles.inviteIcon} />
            </View>
            <View style={styles.textView}>
              <Text style={styles.shareText}>
                Sign Out of Zirtue
              </Text>
            </View>
          </TouchableOpacity> */}
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
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(Profile);
