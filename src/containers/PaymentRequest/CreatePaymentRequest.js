import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';

import { Color } from '../../constants';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import CustomPicker from '../../components/select';
import CustomHeader from '../../components/header';
import CustomDatePicker from '../../components/datepicker';
import { cameraIcon, googleDriveImage, icloudImage } from '../../constants/images';

class CreatePaymentRequest extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      reason: '',
      terms: '',
      date: ''
    };
  }

  onPressNext() {
    this.props.navigation.navigate('select_payer');
  }

  onPressCamera() {

  }

  onPressDrive() {

  }

  onPressCloud() {

  }

  render() {
    const { reason, terms, date } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Create Payment Request"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content contentContainerStyle={styles.content}>
          <CustomPicker
            data={['Option1', 'Option2', 'Option3', 'Option4']}
            placeholder="select"
            value={reason}
            label="Reason for Payment"
            onSelect={text => this.setState({ reason: text })}
          />
          <CustomPicker
            data={['Option1', 'Option2', 'Option3', 'Option4']}
            placeholder="select"
            value={terms}
            label="Payment Terms"
            onSelect={text => this.setState({ terms: text })}
          />
          <CustomDatePicker
            placeholder="Select date"
            label="Initial Payment Date"
            value={date}
            onChange={text => this.setState({ date: text })}
          />
          <Text style={styles.bottomText}>
            Attach and Share More
            <Text style={styles.optional}>(Optional)</Text>
          </Text>
          <TouchableOpacity onPress={this.onPressCamera.bind(this)} style={styles.optionalView}>
            <View style={styles.iconView}>
              <Image source={cameraIcon} style={styles.icon} />
            </View>
            <Text style={styles.optionalText}>Camera/ Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressDrive.bind(this)} style={styles.optionalView}>
            <View style={styles.iconView}>
              <Image source={googleDriveImage} style={styles.icon} />
            </View>
            <Text style={styles.optionalText}>Google Docs</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onPressCloud.bind(this)} style={styles.optionalView}>
            <View style={styles.iconView}>
              <Image source={icloudImage} style={styles.icloudImageIcon} />
            </View>
            <Text style={styles.optionalText}>iCloud Drive</Text>
          </TouchableOpacity>
          <CustomButton
            text="Next"
            backgroundColor={Color.blue}
            color={Color.white}
            onPress={this.onPressNext.bind(this)}
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
  button: {
    width: dynamicSize(335),
    marginBottom: dynamicSize(30)
  },
  bottomText: {
    fontSize: getFontSize(18),
    color: Color.text,
    marginBottom: dynamicSize(20)
  },
  optional: {
    color: Color.blue,
    fontSize: getFontSize(18)
  },
  optionalView: {
    marginBottom: dynamicSize(20),
    borderRadius: 6,
    borderColor: Color.lightgray,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: dynamicSize(335),
    height: dynamicSize(50)
  },
  iconView: {
    width: dynamicSize(50),
    height: dynamicSize(50),
    borderRightColor: Color.lightgray,
    borderRightWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: dynamicSize(21),
    height: dynamicSize(19),
    resizeMode: 'contain'
  },
  optionalText: {
    paddingHorizontal: dynamicSize(20),
    fontSize: getFontSize(16)
  },
  icloudImageIcon: {
    width: dynamicSize(28),
    height: dynamicSize(20),
    resizeMode: 'contain'
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(CreatePaymentRequest);
