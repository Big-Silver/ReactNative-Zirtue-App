import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import { Color } from '../../constants';
import { dynamicSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import CustomHeader from '../../components/header';
import CustomInput from '../../components/input';


class ResetPassword extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      password: '',
      confirm: '',
      errorType: ''
    };
  }

  onSendLink() {

  }

  render() {
    const { password, confirm, errorType } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Create New Password"
          left="Back"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={styles.content}>
          <View style={styles.inputView}>
            <CustomInput
              label="Enter Your New Password"
              placeholder="New password"
              value={password}
              onChangeText={text => this.setState({ password: text })}
              isError={errorType === 'password'}
              errorText="Password must be over 8 digits in length"
            />
            <CustomInput
              label="Confirm Your Password"
              placeholder="Retype your password"
              value={confirm}
              onChangeText={text => this.setState({ confirm: text })}
              isError={errorType === 'confirm'}
              errorText="Confirm password is incorrect"
            />
          </View>
          <CustomButton
            text="Confirm"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onSendLink.bind(this)}
            style={styles.button}
          />
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
    flex: 1,
  },
  inputView: {
    flex: 1,
    paddingTop: dynamicSize(30),
    paddingHorizontal: dynamicSize(20)
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

export default connect(mapStateToProps, undefined)(ResetPassword);
