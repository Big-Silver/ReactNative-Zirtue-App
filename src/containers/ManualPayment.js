import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import CustomButton from '../components/button';
import CustomHeader from '../components/header';
import { dollarImage } from '../constants/images';

class ManualPayment extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      amount: ''
    };
  }

  onPressNext() {
    console.log('paid');
  }

  render() {
    const { amount } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Manual Payment"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <KeyboardAvoidingView style={styles.content} behavior="padding" enabled>
          <View style={styles.topView}>
            <Text style={styles.subtitle}>Set your manual payment amount</Text>
            <View style={styles.inputView}>
              <Image
                style={styles.dollar}
                source={dollarImage}
              />
              <TextInput
                style={styles.input}
                onChangeText={text => this.setState({ amount: text })}
                value={amount}
                keyboardType="numeric"
                maxLength={4}
              />
            </View>
          </View>
          <CustomButton
            text="Pay"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onPressNext.bind(this)}
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
  subtitle: {
    fontSize: getFontSize(16),
    color: '#212121'
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
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(ManualPayment);
