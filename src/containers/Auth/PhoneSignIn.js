import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

import { Color } from '../../constants';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import CustomHeader from '../../components/header';
import CustomInput from '../../components/input';
import { EmailSignInLogo } from '../../constants/images';


class PhoneSignIn extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: ''
    };
  }

  onLogin() {
    this.props.navigation.navigate('phone_signin_code');
  }

  onPressForgot() {
    this.props.navigation.navigate('forgot_password');
  }

  render() {
    const { phoneNumber, password } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Sign In"
          left="Back"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content contentContainerStyle={styles.content}>
          <View style={styles.welcomeView}>
            <Text style={styles.welcomeText}>Welcome to <Text style={{ color: Color.blue }}>Zirtue</Text></Text>
            <Image source={EmailSignInLogo} style={styles.logoImage} />
          </View>
          <View style={styles.inputView}>
            <CustomInput
              label="Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={text => this.setState({ phoneNumber: text })}
              errorText="Invalid Phone Number"
            />
            <CustomInput
              label="Password"
              secure
              value={password}
              onChangeText={text => this.setState({ password: text })}
            />
            <View style={styles.forgotView}>
              <TouchableOpacity onPress={this.onPressForgot.bind(this)}>
                <Text style={styles.forgotText}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          </View>
          <CustomButton
            text="Login"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onLogin.bind(this)}
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
    flex: 1,
  },
  welcomeView: {
    alignItems: 'center',
    paddingTop: dynamicSize(40)
  },
  welcomeText: {
    fontSize: getFontSize(30),
    marginBottom: dynamicSize(20)
  },
  logoImage: {
    width: dynamicSize(285),
    height: dynamicSize(200),
    resizeMode: 'contain'
  },
  inputView: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: dynamicSize(20)
  },
  labelText: {
    fontSize: getFontSize(16),
    color: Color.text,
    marginBottom: dynamicSize(5)
  },
  forgotView: {
    alignItems: 'flex-end'
  },
  forgotText: {
    fontSize: 12,
    color: Color.darkblue
  },
  button: {
    marginBottom: dynamicSize(30),
    marginHorizontal: dynamicSize(20)
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(PhoneSignIn);
