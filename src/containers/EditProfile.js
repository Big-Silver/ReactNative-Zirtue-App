import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  KeyboardAvoidingView,
  Image,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { Icon } from 'react-native-elements';
import { Color } from '../constants';
import CustomHeader from '../components/header';
import CustomButton from '../components/button';
import CustomInput from '../components/input';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

const { width } = Dimensions.get('window');
const bigBlueBG = require('../assets/images/bigBlueBG.png');
const user2 = require('../assets/images/user2.png');

class EditProfile extends Component {
  static navigationOptions = () => {
    return {
      header: null
    };
  }

  state = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'example@email.com',
    phoneNumber: '(201) 123 4324 234',
    address: '2700 Thomas Ave, Dallas, TX 75201'
  }

  onSave = () => {
  }

  goInviteFamily = () => {
    this.props.navigation.navigate('inviteFamily');
  }

  goSettings = () => {
    this.props.navigation.navigate('settings');
  }

  render() {
    const { firstName, lastName, email, phoneNumber, address } = this.state;
    return (
      <Container style={styles.content}>
        <CustomHeader
          title="Edit Profile"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.pop()}
        />
        <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
          <ScrollView contentContainerStyle={styles.listview}>
            <ImageBackground source={bigBlueBG} style={styles.topView}>
              <View style={styles.topImageView}>
                <View>
                  <Image source={user2} style={styles.userIcon} />
                </View>
                <TouchableOpacity style={styles.locationView}>
                  <Icon
                    name="photo-camera"
                    type="material"
                    color="#A2CBF6"
                    size={20}
                  />
                  <Text style={styles.location}>
                    Change Profile Photo
                  </Text>
                </TouchableOpacity>
              </View>
            </ImageBackground>
            <View style={styles.inputView}>
              <CustomInput
                label="First Name"
                placeholder="First Name"
                value={firstName}
                onChangeText={text => this.setState({ firstName: text })}
              />
              <CustomInput
                label="Last Name"
                placeholder="Last Name"
                value={lastName}
                onChangeText={text => this.setState({ lastName: text })}
              />
              <CustomInput
                label="Email Address"
                placeholder="Email Address"
                value={email}
                onChangeText={text => this.setState({ email: text })}
              />
              <CustomInput
                label="Phone Number"
                placeholder="Phone Number"
                value={phoneNumber}
                onChangeText={text => this.setState({ phoneNumber: text })}
              />
              <CustomInput
                label="Billing Address"
                placeholder="Billing Address"
                value={address}
                onChangeText={text => this.setState({ address: text })}
              />
            </View>
            <CustomButton
              text="Save Changes"
              backgroundColor={Color.blue}
              color={Color.white}
              onPress={this.onSave.bind(this)}
              style={styles.button}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
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
  email: {
    fontSize: getFontSize(14),
    color: 'white',
    marginTop: dynamicSize(5)
  },
  locationView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: dynamicSize(20),
  },
  location: {
    fontSize: getFontSize(14),
    color: 'white',
    marginLeft: dynamicSize(5)
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
  inputView: {
    flex: 1,
    paddingTop: dynamicSize(30),
    paddingHorizontal: dynamicSize(20)
  },
  button: {
    marginBottom: dynamicSize(30),
    marginHorizontal: dynamicSize(20)
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(EditProfile);
