import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

import { Color } from '../../constants';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import CustomHeader from '../../components/header';
import CustomInput from '../../components/input';
import { ForgotPasswordLogo } from '../../constants/images';

class ForgotPassword extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      errorType: ''
    };
  }

  onSendLink() {
    this.props.navigation.navigate('reset_password');
  }

  render() {
    const { phoneNumber, errorType } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Forgot Password"
          left="Back"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content contentContainerStyle={styles.content}>
          <View style={styles.welcomeView}>
            <Image source={ForgotPasswordLogo} style={styles.logoImage} />
          </View>
          <Text style={styles.explain}>To reset password please enter your phone number. We'll send you message with reset link</Text>
          <View style={styles.inputView}>
            <CustomInput
              label="Phone Number"
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={text => this.setState({ phoneNumber: text })}
              isError={errorType === 'number'}
              errorText="Invalid Phone Number"
            />
          </View>
          <CustomButton
            text="Send"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onSendLink.bind(this)}
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
    height: dynamicSize(208),
    resizeMode: 'contain'
  },
  explain: {
    textAlign: 'center',
    fontSize: getFontSize(16),
    color: Color.text,
    paddingHorizontal: dynamicSize(5)
  },
  inputView: {
    flex: 1,
    paddingTop: dynamicSize(35),
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

export default connect(mapStateToProps, undefined)(ForgotPassword);
