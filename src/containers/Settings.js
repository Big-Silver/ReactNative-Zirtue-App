import React, { Component } from 'react';
import {
  View,
  ScrollView,
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
const badgeEditProfile = require('../assets/images/badge_edit-profile.png');
const badgeNotification = require('../assets/images/badge_notification.png');
const badgeSocialNetworks = require('../assets/images/badge_social-networks.png');
const badgeChangePassword = require('../assets/images/badge_change-password.png');
const badgeBanksCards = require('../assets/images/badge_banks-cards.png');
const badgePrivacy = require('../assets/images/badge_privacy.png');
const badgeLegal = require('../assets/images/badge_legal.png');
const badgeFeedback = require('../assets/images/badge_feedback.png');
const badgeRate = require('../assets/images/badge_rate.png');
const badgeLogout = require('../assets/images/badge_logout.png');

class Settings extends Component {
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

  goEditProfile = () => {
    this.props.navigation.navigate('editProfile');
  }

  goNotification = () => {
    this.props.navigation.navigate('notifications');
  }

  signOut = () => {
    this.props.navigation.navigate('login');
  }

  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Settings"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              General Information
            </Text>
          </View>
          <TouchableOpacity style={styles.itemView} onPress={this.goEditProfile}>
            <View style={styles.iconView}>
              <Image source={badgeEditProfile} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Edit Profile
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
          <TouchableOpacity style={styles.itemView} onPress={this.goNotification}>
            <View style={styles.iconView}>
              <Image source={badgeNotification} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Notifications
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
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={badgeSocialNetworks} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Social Networks
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
          <View style={styles.titleView}>
            <Text style={styles.title}>
              Private Information
            </Text>
          </View>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={badgeChangePassword} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Change Password
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
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={badgeBanksCards} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Banks & Cards
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
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={badgePrivacy} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Privacy
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
          <View style={styles.titleView}>
            <Text style={styles.title}>
              Other
            </Text>
          </View>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={badgeLegal} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Legal
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
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={badgeFeedback} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Send Feedback
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
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.iconView}>
              <Image source={badgeRate} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Rate Zirtue
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
          <TouchableOpacity style={styles.itemView} onPress={this.signOut}>
            <View style={styles.iconView}>
              <Image source={badgeLogout} style={styles.shareIcon} />
            </View>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Sign Out of Zirtue
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
          <View style={styles.whiteView} />
        </ScrollView>
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

export default connect(mapStateToProps, undefined)(Settings);
