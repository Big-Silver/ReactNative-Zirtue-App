import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import { Container } from 'native-base';

import { Color } from '../../constants';
import { dynamicSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import { AuthPage1, AuthPage2, AuthPage3, AuthPage, HomeMark } from '../../constants/images';

// const { width } = Dimensions.get('window');

class Auth extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      authType: 'signup',
    };
  }

  componentDidMount() {
    // this.props.navigation.navigate('editProfile');
  }

  onToggle(authType) {
    this.setState({ authType });
  }

  signUpWithFacebook() {

  }

  signUpWithGoogle() {

  }

  signInWithPhone() {
    this.props.navigation.navigate('phone_signin');
  }

  signInWithEmail() {
    this.props.navigation.navigate('email_signin');
  }

  signInWithGoogle() {

  }

  signInWithFacebook() {

  }

  signInWithFaceID() {

  }

  render() {
    const { authType } = this.state;
    return (
      <Container style={styles.container}>
        {/* <View style={styles.pageView}>
          <Swiper
            autoplay
            index={0}
            paginationStyle={{ marginBottom: dynamicSize(-50) }}
          >
            <View style={styles.pageImageView}>
              <Image source={AuthPage1} style={styles.pageImage} />
            </View>
            <View style={styles.pageImageView}>
              <Image source={AuthPage2} style={styles.pageImage} />
            </View>
            <View style={styles.pageImageView}>
              <Image source={AuthPage3} style={styles.pageImage} />
            </View>
          </Swiper>
        </View> */}
        <ImageBackground source={AuthPage} imageStyle={{resizeMode: 'stretch'}} style={styles.backgroundImage}>
          <View style={styles.markView}>
            <Image source={HomeMark} style={styles.pageMark} />
          </View>
          <View style={styles.buttonView}>
            <View style={styles.toggleButtonView}>
              <TouchableOpacity
                onPress={this.onToggle.bind(this, 'signup')}
                style={[styles.toggleButton, { backgroundColor: authType === 'signup' ? Color.blue : 'transparent' }]}
              >
                <Text style={{ color: authType === 'signup' ? Color.white : Color.text }}>Sign Up</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={this.onToggle.bind(this, 'signin')}
                style={[styles.toggleButton, { backgroundColor: authType === 'signin' ? Color.blue : 'transparent' }]}
              >
                <Text style={{ color: authType === 'signin' ? Color.white : Color.text }}>Sign In</Text>
              </TouchableOpacity>
            </View>
            {
                authType === 'signup' ?
                  <ScrollView>
                    {/* <CustomButton
                      hasIcon
                      icon="facebook"
                      text="Sign Up With Facebook"
                      color={Color.darkblue}
                      onPress={this.signUpWithFacebook.bind(this)}
                      style={styles.authButton}
                    />
                    <CustomButton
                      hasIcon
                      icon="google"
                      text="Sign Up With Google"
                      color={Color.darkgray}
                      onPress={this.signUpWithGoogle.bind(this)}
                      style={styles.authButton}
                    /> */}
                    <CustomButton
                      hasIcon
                      icon="mail-outline"
                      text="Sign Up With Email"
                      backgroundColor={Color.darkblue}
                      color={Color.white}
                      onPress={() => this.props.navigation.navigate('normal_signup')}
                      style={styles.authButton}
                    />
                  </ScrollView>
                :
                  <ScrollView
                    contentContainerStyle={{ paddingBottom: dynamicSize(30) }}
                    showsVerticalScrollIndicator={false}
                  >
                    {/* <CustomButton
                      hasIcon
                      icon="local-phone"
                      text="Phone Number"
                      backgroundColor={Color.green}
                      color={Color.white}
                      onPress={this.signInWithPhone.bind(this)}
                      style={styles.authButton}
                    /> */}
                    <CustomButton
                      hasIcon
                      icon="mail-outline"
                      text="Sign In With Email"
                      backgroundColor={Color.darkblue}
                      color={Color.white}
                      onPress={this.signInWithEmail.bind(this)}
                      style={styles.authButton}
                    />
                    {/* <CustomButton
                      hasIcon
                      icon="google"
                      text="Sign In With Google"
                      color={Color.darkgray}
                      onPress={this.signInWithGoogle.bind(this)}
                      style={styles.authButton}
                    />
                    <CustomButton
                      hasIcon
                      icon="facebook"
                      text="Sign In With Facebook"
                      color={Color.darkblue}
                      onPress={this.signInWithFacebook.bind(this)}
                      style={styles.authButton}
                    />
                    <CustomButton
                      hasIcon
                      icon="face"
                      text="Face ID"
                      color={Color.text}
                      onPress={this.signInWithFaceID.bind(this)}
                      style={styles.authButton}
                    /> */}
                  </ScrollView>
              }
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: Color.white,
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  content: {
    padding: 10,
  },
  pageView: {
    flex: 0.9,
    paddingBottom: dynamicSize(50)
  },
  header: {
    width: dynamicSize(80),
    height: dynamicSize(80),
    resizeMode: 'contain',
  },
  markView: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: dynamicSize(70)
  },
  pageMark: {
    width: dynamicSize(300),
    height: dynamicSize(200)
  },
  pageImage: {
    width: dynamicSize(305),
    height: dynamicSize(266),
    resizeMode: 'contain',
  },
  pageImageView: {
    flex: 1,
    padding: dynamicSize(20),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonView: {
    flex: 1,
    alignItems: 'center',
  },
  toggleButtonView: {
    borderRadius: dynamicSize(6),
    backgroundColor: Color.light,
    padding: 4,
    flexDirection: 'row',
    width: dynamicSize(198),
    height: dynamicSize(40)
  },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: dynamicSize(6),
  },
  authButton: {
    marginTop: dynamicSize(15)
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(Auth);
