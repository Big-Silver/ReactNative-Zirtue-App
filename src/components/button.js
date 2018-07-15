import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { Icon } from 'native-base';
import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

const googleIcon = require('../assets/images/google.png');
const facebookIcon = require('../assets/images/facebook.png');
const faceIcon = require('../assets/images/faceId.png');

export default class CustomButton extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    text: PropTypes.string.isRequired,
    hasIcon: PropTypes.bool,
    icon: PropTypes.string,
    onPress: PropTypes.func.isRequired,
    color: PropTypes.string,
    style: PropTypes.object.isRequired
  }

  static defaultProps = {
    backgroundColor: Color.light,
    hasIcon: false,
    color: Color.white,
    icon: '',
    borderColor: '',
  }

  render() {
    const { icon, hasIcon, text, backgroundColor, color, style, borderColor } = this.props;
    const buttonContainer = {
      width: hasIcon ? dynamicSize(275) : dynamicSize(335),
      flexDirection: hasIcon ? 'row' : 'column',
      alignItems: 'center',
      justifyContent: hasIcon ? null : 'center',
      height: dynamicSize(50),
      paddingHorizontal: dynamicSize(20),
      backgroundColor,
      borderWidth: 1,
      borderColor: borderColor !== '' ? borderColor : Color.lightgray,
      borderRadius: 6
    };
    return (
      <TouchableOpacity style={style} onPress={() => this.props.onPress()}>
        <View style={buttonContainer}>
          {
            icon === 'google' ?
              <Image source={googleIcon} style={styles.icon} />
            : icon === 'facebook' ?
              <Image source={facebookIcon} style={styles.icon} />
            : icon === 'face' ?
              <Image source={faceIcon} style={styles.icon} />
            : icon.length > 0 ?
              <Icon type="MaterialIcons" name={icon} style={styles.mIcon} />
            : null
          }
          <Text style={[styles.buttonText, { color }]}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: getFontSize(16),
  },
  icon: {
    width: dynamicSize(24),
    height: dynamicSize(24),
    resizeMode: 'contain',
    marginRight: dynamicSize(20)
  },
  mIcon: {
    width: dynamicSize(24),
    fontSize: 22,
    color: Color.white,
    marginRight: dynamicSize(20)
  }
});
