import React, { Component } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import { Color } from '../../constants';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import CustomHeader from '../../components/header';
import CustomInput from '../../components/input';
import { PhoneImage, EmailImage } from '../../constants/images';

class InvitePayer extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      errorType: '',
      phone: '',
      toggleType: 'phone'
    };
  }

  onSendInvite() {

  }

  toggleInput() {
    if (this.state.toggleType === 'phone') this.setState({ toggleType: 'email' });
    else this.setState({ toggleType: 'phone' });
  }

  render() {
    const { errorType, phone, toggleType } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Select Payer"
          left=""
          right="person"
          theme="blue"
          hasBackIcon
          onPressRight={() => this.props.navigation.navigate('select_payer')}
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
          <View style={styles.topView}>
            <Image source={toggleType === 'phone' ? PhoneImage : EmailImage} style={styles.phoneIcon} />
            <Text style={styles.maintitle}>
              {toggleType === 'phone' ? 'Enter Phone Number' : 'Enter Email Address'}
            </Text>
            <Text style={styles.subtitle}>We'll send invite link to this person</Text>
            <View style={{ width: dynamicSize(335) }}>
              <CustomInput
                onRef={ref => this.input = ref}
                label={toggleType === 'phone' ? 'Phone Number' : 'Email Address'}
                isError={errorType === toggleType}
                errorText="Phone number is invalid"
                secure
                value={phone}
                keyboardType={toggleType === 'phone' ? 'phone-pad' : 'email-address'}
                onChangeText={text => this.setState({ phone: text })}
              />
            </View>
            <TouchableOpacity onPress={this.toggleInput.bind(this)}>
              <Text style={styles.toggleText}>
                {toggleType === 'phone' ? 'Use Email Instead' : 'Use Phone number Instead'}
              </Text>
            </TouchableOpacity>
          </View>
          <CustomButton
            text="Send Invite Link"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onSendInvite.bind(this)}
            style={styles.button}
          />
        </KeyboardAvoidingView>
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
  topView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dollar: {
    width: dynamicSize(30),
    height: dynamicSize(50),
    resizeMode: 'contain'
  },
  input: {
    flex: 1,
    fontSize: getFontSize(45),
    paddingLeft: dynamicSize(10)
  },
  inputView: {
    flexDirection: 'row',
    height: dynamicSize(60),
    width: dynamicSize(145),
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Color.gray,
    marginTop: dynamicSize(20)
  },
  button: {
    width: dynamicSize(335),
    marginBottom: dynamicSize(30),
    marginLeft: dynamicSize(20)
  },
  toggleText: {
    fontSize: getFontSize(12),
    color: Color.darkblue,
    textDecorationLine: 'underline'
  },
  phoneIcon: {
    width: dynamicSize(80),
    height: dynamicSize(80),
    resizeMode: 'contain',
    marginBottom: dynamicSize(20)
  },
  maintitle: {
    fontSize: getFontSize(20),
    color: Color.black,
    marginBottom: dynamicSize(10)
  },
  subtitle: {
    fontSize: getFontSize(16),
    color: Color.text,
    marginBottom: dynamicSize(30)
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(InvitePayer);
