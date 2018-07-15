import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import CheckBox from 'react-native-check-box';

import { Color } from '../../constants';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import CustomHeader from '../../components/header';
import CustomInput from '../../components/input';
import CustomDatePicker from '../../components/datepicker';
import {
  attachIcon,
  cameraIcon,
  changeAvatar,
  removeAvatar,
} from '../../constants/images';

const ImagePicker = require('react-native-image-picker');

class NormalSignUp extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      DOB: '',
      password: '',
      confirm: '',
      image: { uri: 'none' },
      checked: false,
      errorType: ''
    };
  }

  onChooseImage() {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({ image: { uri: response.uri } });
      }
    });
  }

  onRemoveImage() {
    this.setState({ image: { uri: 'none' } });
  }

  onClickUserAgreement() {

  }

  onClickPrivacyPolicy() {

  }

  onCompleteSignUp() {
    this.props.navigation.navigate('invite');
  }

  checkValidation() {
    return false;
  }

  render() {
    const { firstName, lastName, email, DOB, password, confirm, image, checked, errorType } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Sign Up With Email"
          left="Back"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content contentContainerStyle={styles.content}>
          <CustomInput
            label="First Name"
            isError={errorType === 'firstName'}
            errorText="First name is required"
            placeholder="Type your first name"
            value={firstName}
            onChangeText={text => this.setState({ firstName: text })}
          />
          <CustomInput
            label="Last Name"
            isError={errorType === 'lastName'}
            errorText="Last name is required"
            placeholder="Type your last name"
            value={lastName}
            onChangeText={text => this.setState({ lastName: text })}
          />
          <CustomInput
            label="Email Address"
            isError={errorType === 'email'}
            errorText="Email is invalid"
            keyboardType="email-address"
            placeholder="Type your email address"
            value={email}
            onChangeText={text => this.setState({ email: text })}
          />
          <CustomDatePicker
            placeholder="Select date"
            label="Day of Birthday"
            value={DOB}
            onChange={text => this.setState({ DOB: text })}
          />
          <CustomInput
            label="Password"
            isError={errorType === 'password'}
            errorText="Password must be over 8 in length"
            secure
            value={password}
            placeholder="Create Password"
            onChangeText={text => this.setState({ password: text })}
          />
          <CustomInput
            label=" ConfirmPassword"
            isError={errorType === 'confirm'}
            errorText="Confirm password is incorrect"
            secure
            value={confirm}
            placeholder="Retype your password"
            onChangeText={text => this.setState({ confirm: text })}
          />
          <Text style={styles.labelText}>Profile Picture</Text>
          {
              image.uri === 'none' ?
                <View style={styles.photoLineView}>
                  <View style={styles.avatarView}>
                    <Image source={cameraIcon} style={styles.camera} />
                  </View>
                  <Image source={attachIcon} style={styles.attach} />
                  <TouchableOpacity onPress={() => this.onChooseImage()}>
                    <Text style={styles.fileText}>Choose a File</Text>
                  </TouchableOpacity>
                </View>
              :
                <View style={styles.photoLineView}>
                  <View style={styles.avatarView}>
                    <Image source={image} style={styles.avatar} />
                  </View>
                  <Image source={changeAvatar} style={styles.attach} />
                  <TouchableOpacity onPress={() => this.onChooseImage()}>
                    <Text style={styles.fileEditText}>Change Picture</Text>
                  </TouchableOpacity>
                  <Image source={removeAvatar} style={styles.attach} />
                  <TouchableOpacity onPress={() => this.onRemoveImage()}>
                    <Text style={styles.fileEditText}>Remove</Text>
                  </TouchableOpacity>
                </View>

            }

          <View style={styles.checkView}>
            <CheckBox
              style={{ height: dynamicSize(20), width: dynamicSize(20) }}
              onClick={() => this.setState({ checked: !checked })}
              isChecked={checked}
              checkBoxColor={Color.darkblue}
            />
            <View style={styles.rightTextView}>
              <Text>I agree with Zirtue's </Text>
              <TouchableOpacity onPress={this.onClickUserAgreement.bind(this)}>
                <Text style={styles.linkText}>User Agreement</Text>
              </TouchableOpacity>
              <Text> and </Text>
              <TouchableOpacity onPress={this.onClickPrivacyPolicy.bind(this)}>
                <Text style={styles.linkText}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
          <CustomButton
            text="Complete"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onCompleteSignUp.bind(this)}
            style={styles.button}
          />
        </Content>
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
    backgroundColor: Color.white,
    padding: dynamicSize(20)
  },
  labelText: {
    fontSize: getFontSize(16),
    color: Color.text,
    marginBottom: dynamicSize(5)
  },
  photoLineView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: dynamicSize(50),
    height: dynamicSize(50),
    resizeMode: 'cover'
  },
  avatarView: {
    width: dynamicSize(50),
    height: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.gray,
    borderRadius: dynamicSize(25),
    overflow: 'hidden'
  },
  camera: {
    width: dynamicSize(20),
    height: dynamicSize(18),
    resizeMode: 'stretch',
  },
  attach: {
    width: dynamicSize(14),
    height: dynamicSize(14),
    resizeMode: 'stretch',
    marginLeft: dynamicSize(10)
  },
  fileText: {
    color: Color.black,
    textDecorationLine: 'underline',
    marginLeft: dynamicSize(5)
  },
  fileEditText: {
    marginLeft: dynamicSize(5),
    marginRight: dynamicSize(10),
    textDecorationLine: 'none'
  },
  linkText: {
    padding: 0,
    color: Color.blue,
    textDecorationLine: 'underline'
  },
  checkView: {
    flexDirection: 'row',
    marginTop: dynamicSize(20)
  },
  rightTextView: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    width: dynamicSize(250),
    flexWrap: 'wrap'
  },
  button: {
    marginVertical: dynamicSize(20)
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(NormalSignUp);
