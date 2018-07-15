import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

import { Color } from '../../constants';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import CustomHeader from '../../components/header';
import CustomInput from '../../components/input';
import CustomPicker from '../../components/select';
import { LockImage } from '../../constants/images';

class BankDetail extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      errorType: '',
      bankName: '',
      routeNumber: '',
      accountNumber: ''
    };
  }

  onPressConfirm() {
    Alert.alert(
      '',
      'All set! Your payment request was successfully sent to Payer for approval.\nYou will be notified once your terms are approved.',
      [
        {
          text: 'Go to Activity',
          onPress: () => this.props.navigation.navigate('tabs'),
          style: 'cancel'
        }
      ]
    );
  }

  render() {
    const { errorType, bankName, routeNumber, accountNumber } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Bank Details"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content contentContainerStyle={styles.content}>
          <View style={styles.topView}>
            <Image source={LockImage} style={styles.LockImage} />
            <Text style={styles.maintitle}>Bank Details</Text>
            <Text style={styles.subtitle}>Enter your secure bank details to receive your funds from payer</Text>
          </View>
          <CustomPicker
            data={['Option1', 'Option2', 'Option3', 'Option4']}
            placeholder="Select"
            value={bankName}
            label="Bank Name"
            onSelect={text => this.setState({ bankName: text })}
              />
          <CustomInput
            label="Bank Routing Number"
            isError={errorType === 'routeNumber'}
            errorText="Routing number is required"
            secure
            value={routeNumber}
            keyboardType="numeric"
            onChangeText={text => this.setState({ routeNumber: text })}
            />
          <CustomInput
            label="Bank Routing Number"
            isError={errorType === 'routeNumber'}
            errorText="Routing number is required"
            secure
            value={accountNumber}
            keyboardType="numeric"
            onChangeText={text => this.setState({ routeNumber: text })}
            />
          <CustomButton
            text="Confirm"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onPressConfirm.bind(this)}
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
    padding: dynamicSize(20)
  },
  topView: {
    flex: 1,
    padding: dynamicSize(20),
    alignItems: 'center'
  },
  button: {
    width: dynamicSize(335),
    marginBottom: dynamicSize(30),
  },
  LockImage: {
    width: dynamicSize(80),
    height: dynamicSize(80),
    resizeMode: 'contain',
    marginBottom: dynamicSize(20)
  },
  maintitle: {
    fontSize: getFontSize(20),
    color: Color.black,
    marginBottom: dynamicSize(20)
  },
  subtitle: {
    fontSize: getFontSize(16),
    color: Color.text,
    marginBottom: dynamicSize(30),
    paddingHorizontal: dynamicSize(55),
    textAlign: 'center'
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(BankDetail);
