import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import CustomButton from '../components/button';
import CustomHeader from '../components/header';

const inviteFamilyLogo = require('../assets/images/inviteFamilyLogo.png');

class InviteFamily extends Component {
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

  onSendLink() {
  }

  goShareInvite = () => {
    this.props.navigation.navigate('shareInvite');
  }

  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Invite Family"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content contentContainerStyle={styles.content}>
          <View style={styles.welcomeView}>
            <Image source={inviteFamilyLogo} style={styles.logoImage} />
          </View>
          <View style={styles.bigTitleView}>
            <Text style={styles.bigTitle}>Invite your friends & family to Zirtue</Text>
          </View>
          <View style={styles.bigTitleView}>
            <Text style={styles.explain}>Share an invite directly,  or choose contacts from your address book. </Text>
          </View>
          <View style={styles.inputView} />
          <CustomButton
            text="Share an Invite"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.goShareInvite}
            style={styles.button}
          />
          <CustomButton
            text="Choose Contacts"
            backgroundColor={Color.white}
            color={Color.blue}
            borderColor={Color.blue}
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
  bigTitle: {
    textAlign: 'center',
    fontSize: getFontSize(20),
    color: '#212121',
    paddingHorizontal: dynamicSize(5),
    width: dynamicSize(250),
  },
  explain: {
    textAlign: 'center',
    fontSize: getFontSize(16),
    color: '#212121',
    paddingHorizontal: dynamicSize(5),
    width: dynamicSize(280),
    marginTop: dynamicSize(20)
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
  },
  button1: {
    marginBottom: dynamicSize(30),
    marginHorizontal: dynamicSize(20),
    borderColor: Color.blue,
    borderWidth: 1
  },
  bigTitleView: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(InviteFamily);
