import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Title, Header, Body, Icon } from 'native-base';
import { Color } from '../constants';
import { ShapeImage } from '../constants/images';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

export default class CustomHeader extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    left: PropTypes.string.isRequired,
    right: PropTypes.string,
    onPressLeft: PropTypes.func,
    onPressRight: PropTypes.func,
    hasBackIcon: PropTypes.bool,
    theme: PropTypes.string
  }

  static defaultProps = {
    onPressLeft: () => undefined,
    onPressRight: () => undefined,
    right: null,
    hasBackIcon: false,
    theme: 'white'
  }

  render() {
    const { title, left, right, hasBackIcon, theme } = this.props;
    const headerStyle = {
      height: dynamicSize(80),
      borderBottomWidth: 0,
      borderBottomColor: Color.lightgray,
      backgroundColor: theme === 'white' ? Color.light : Color.darkblue,
    };
    const sideText = {
      fontSize: getFontSize(14),
      color: theme === 'white' ? Color.blue : Color.white,
      justifyContent: 'center',
    };
    const backIcon = {
      fontSize: getFontSize(30),
      marginRight: dynamicSize(5),
      color: theme === 'white' ? Color.blue : Color.white,
      justifyContent: 'center',
    };
    const titleStyle = {
      color: theme === 'white' ? Color.black : Color.white,
    };
    return (
      <Header style={headerStyle}>
        <TouchableOpacity onPress={() => this.props.onPressLeft()} style={styles.leftView}>
          {
            hasBackIcon ?
              <View style={styles.leftView}>
                <Icon name="arrow-back" style={backIcon} />
                <Text style={sideText}>{left}</Text>
              </View>
            :
              <Text style={sideText}>{left}</Text>
          }
        </TouchableOpacity>
        <Body style={{ flex: 1, alignItems: 'center' }}>
          <Title style={titleStyle}>{title}</Title>
        </Body>
        {
          right === '' ?
            <View style={styles.rightView} />
          :
            <TouchableOpacity onPress={() => this.props.onPressRight()} style={styles.rightView}>
              {
                right === 'callPad' ?
                  <Image source={ShapeImage} style={styles.icon} />
                : right === 'person' ?
                  <Icon name="ios-person" style={backIcon} />
                :
                  <Text style={sideText}>{right}</Text>
              }
            </TouchableOpacity>
        }
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  leftView: {
    width: dynamicSize(60),
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightView: {
    width: dynamicSize(60),
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  icon: {
    width: dynamicSize(20),
    height: dynamicSize(20),
    resizeMode: 'contain'
  }
});
