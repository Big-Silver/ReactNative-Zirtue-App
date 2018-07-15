import React, { Component } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Switch,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import CustomHeader from '../components/header';

const { width } = Dimensions.get('window');

class PushNotification extends Component {
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

  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Push Notification"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.titleView}>
            <Text style={styles.title}>
              Money
            </Text>
          </View>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Bank Transfer
                </Text>
              </View>
              <View style={styles.secondView}>
                <Switch onTintColor="#007AFF" value />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Payment Received
                </Text>
              </View>
              <View style={styles.secondView}>
                <Switch onTintColor="#007AFF" value />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Payment Sent
                </Text>
              </View>
              <View style={styles.secondView}>
                <Switch onTintColor="#007AFF" value />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.itemView}>
            <View style={styles.textView}>
              <View style={styles.firstView}>
                <Text style={styles.shareText}>
                  Payment Request Received
                </Text>
              </View>
              <View style={styles.secondView}>
                <Switch onTintColor="#007AFF" value />
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
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
    // flex: 1,
  },
  titleView: {
    width,
    height: dynamicSize(44),
    backgroundColor: '#EFEFF4',
    justifyContent: 'center'
  },
  title: {
    fontSize: getFontSize(17),
    color: '#030303',
    paddingLeft: dynamicSize(20)
  },
  itemView: {
    width,
    height: dynamicSize(50),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F4',
    flexDirection: 'row',
  },
  textView: {
    width,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  shareText: {
    fontSize: getFontSize(17),
    color: '#000000',
    paddingLeft: dynamicSize(20)
  },
  firstView: {
    width: width - dynamicSize(80),
    justifyContent: 'center',
  },
  secondView: {
    width: dynamicSize(80),
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteView: {
    height: dynamicSize(60),
    backgroundColor: 'white'
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(PushNotification);
