import React, { Component } from 'react';
import {
  View,
  Alert
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

import { Color } from '../constants';
import { dynamicSize } from '../helpers/DynamicSize';
import CustomButton from '../components/button';
import CustomInput from '../components/input';
import CustomHeader from '../components/header';
import CustomDatePicker from '../components/datepicker';

class OfflinePayment extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      date: '',
      amount: ''
    };
  }

  onPressNext() {
    // eslint-disable-next-line
    Alert.alert(
      '',
      'Thanks! Your offline payment has been received and submitted to Payer for approval. Click OK to return to see your latest activity.',
      [
        {
          text: 'Ok',
          onPress: () => console.log('Go to Activity'),
          style: 'cancel'
        }
      ]
    );
  }

  render() {
    const { date, amount } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Offline Payment"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content contentContainerStyle={styles.content}>
          <CustomDatePicker
            placeholder="Select"
            label="What date did you make your offline payment?"
            value={date}
            onChange={text => this.setState({ date: text })}
          />
          <View style={styles.inputView}>
            <CustomInput
              label="Amount"
              placeholder="Enter amount"
              value={amount}
              keyboardType="numeric"
              onChangeText={text => this.setState({ amount: text })}
            />
          </View>
        </Content>
        <CustomButton
          text="Pay"
          backgroundColor={Color.blue}
          color={Color.white}
          onPress={this.onPressNext.bind(this)}
          style={styles.button}
        />
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
    padding: dynamicSize(20)
  },
  inputView: {
  },
  button: {
    width: dynamicSize(335),
    marginLeft: dynamicSize(20),
    marginBottom: dynamicSize(30)
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(OfflinePayment);
