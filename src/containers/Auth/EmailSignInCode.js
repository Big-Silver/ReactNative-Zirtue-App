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
import { EmailSignInCodeLogo } from '../../constants/images';

class EmailSignInCode extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      code: '',
      remainedTime: 300
    };
  }

  componentDidMount() {
    this.startTimer();
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  onSubmit() {
    this.props.navigation.navigate('tabs');
  }

  startTimer() {
    const handle = this;
    setTimeout(() => {
      handle.decreaseRemainedTime();
    }, 1000);
  }

  decreaseRemainedTime() {
    if (!this.mounted) return;
    this.setState({ remainedTime: this.state.remainedTime - 1 });
    this.startTimer(this.state.remainedTime - 1);
  }

  convert(time) {
    const M = Math.floor(time / 60);
    const S = time % 60;
    return `${(M < 10) ? `0${M}` : M}:${(S < 10) ? `0${S}` : S}`;
  }

  render() {
    const { code, remainedTime } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Two factor authentication"
          left="Back"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content contentContainerStyle={styles.content}>
          <View style={styles.welcomeView}>
            <Image source={EmailSignInCodeLogo} style={styles.logoImage} />
            <Text style={styles.explain}>To finish signing in, enter the verification code sent to your profile email address</Text>
            <Text style={styles.phonenumber}>(201) 555-0123<Text style={styles.timeText}> ({this.convert(remainedTime)})</Text></Text>
          </View>
          <View style={styles.inputView}>
            <CustomInput
              label="Enter Text Code"
              placeholder="Enter Code"
              value={code}
              onChangeText={text => this.setState({ code: text })}
            />
          </View>
          <CustomButton
            text="Submit"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onSubmit.bind(this)}
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
    padding: dynamicSize(20)
  },
  welcomeView: {
    alignItems: 'center',
    paddingTop: dynamicSize(10),
    paddingBottom: dynamicSize(20)
  },
  logoImage: {
    width: dynamicSize(285),
    height: dynamicSize(200),
    resizeMode: 'contain'
  },
  explain: {
    textAlign: 'center',
    paddingHorizontal: dynamicSize(20),
    fontSize: getFontSize(16),
    color: Color.text,
    marginBottom: dynamicSize(25)
  },
  phonenumber: {
    fontSize: getFontSize(16),
    color: Color.text,
  },
  timeText: {
    color: Color.blue
  },
  inputView: {
    flex: 1,
    paddingTop: dynamicSize(40)
  },
  button: {
    marginBottom: dynamicSize(10),
  },
  labelText: {
    fontSize: getFontSize(16),
    color: Color.text,
    marginBottom: dynamicSize(5)
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(EmailSignInCode);
