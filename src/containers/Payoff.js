import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';

import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import CustomButton from '../components/button';
import CustomHeader from '../components/header';
import { dollarImage } from '../constants/images';

class Payoff extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  onPressNext() {
    console.log('paid');
  }

  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Payoff"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={styles.content}>
          <View style={styles.topView}>
            <Text style={styles.subtitle}>Current Payoff Amount</Text>
            <View style={styles.inputView}>
              <Image
                style={styles.dollar}
                source={dollarImage}
              />
              <Text style={styles.input}>
                70
              </Text>
            </View>
          </View>
          <CustomButton
            text="Pay"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onPressNext.bind(this)}
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
  topView: {
    flex: 1,
    alignItems: 'center',
    marginTop: dynamicSize(150)
  },
  dollar: {
    width: dynamicSize(30),
    height: dynamicSize(56),
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
    width: dynamicSize(95),
    alignItems: 'center',
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

export default connect(mapStateToProps, undefined)(Payoff);
