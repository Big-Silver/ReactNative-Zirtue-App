import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import CustomButton from '../components/button';
import CustomHeader from '../components/header';
import CustomInput from '../components/input';


class InviteLink extends Component {
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
          title="Invite link via Email"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={styles.content}>
          <View style={styles.inputView}>
            <CustomInput
              label="Email"
              placeholder="Email"
              value={password}
              onChangeText={text => this.setState({ password: text })}
              isError={errorType === 'password'}
              errorText="Password must be over 8 digits in length"
            />
            <CustomInput
              label="Email"
              placeholder="Email"
              value={confirm}
              onChangeText={text => this.setState({ confirm: text })}
              isError={errorType === 'confirm'}
              errorText="Confirm password is incorrect"
            />
            <View style={styles.secondView}>
              <TouchableOpacity style={styles.addmoreView}>
                <Text style={styles.addmoreText}>
                  Add more
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <CustomButton
            text="Send Invite Link"
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
  },
  secondView: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  addmoreView: {
    width: dynamicSize(160),
    height: dynamicSize(50),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2B72BF',
    borderRadius: dynamicSize(6),
  },
  addmoreText: {
    fontSize: getFontSize(15),
    color: '#2B72BF'
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(InviteLink);
