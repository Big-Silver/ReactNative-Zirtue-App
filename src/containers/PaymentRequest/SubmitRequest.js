import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import { Table, Row, Rows, TableWrapper, Col } from 'react-native-table-component';

import { Color } from '../../constants';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomButton from '../../components/button';
import CustomHeader from '../../components/header';
import CustomInput from '../../components/input';
import { PictureImage, User1, FrameImage } from '../../constants/images';

class SubmitRequest extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['#', 'Payment Amount', 'Principal Amount', 'Interests Amount', 'Balance Owned'],
      tableTitle: ['1', '2', '3', '4', '5', '6'],
      tableData: [
        ['17.25', '16.25', '1.00', '83.75'],
        ['17.25', '16.41', '0.84', '67.34'],
        ['17.25', '16.58', '0.67', '50.76'],
        ['17.25', '16.74', '0.51', '34.02'],
        ['17.25', '16.91', '0.34', '17.11'],
        ['17.25', '17.11', '0.17', '0.00'],
      ]
    };
  }

  onPressNext() {
    this.props.navigation.navigate('bank_detail');
  }

  onPressCamera() {

  }

  onPressDrive() {

  }

  onPressCloud() {

  }

  render() {
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Submit Payment Request"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <Content>
          <View style={styles.topView}>
            <CustomInput
              label="Payment Amount"
              value="$100"
              onChangeText={text => console.log(text)}
              editable={false}
            />
            <CustomInput
              label="Reason for Payment"
              value="Vacation Expense"
              onChangeText={text => console.log(text)}
              editable={false}
            />
            <CustomInput
              label="Payment Terms"
              value="6 Month"
              onChangeText={text => console.log(text)}
              editable={false}
            />
            <CustomInput
              label="Initial Payment Date"
              value="May 1, 2018"
              onChangeText={text => console.log(text)}
              editable={false}
            />
            <Text style={styles.labelText}>Attachments:</Text>
            <View style={styles.optionalView}>
              <View style={styles.iconView}>
                <Image source={PictureImage} style={styles.icon} />
              </View>
              <Text style={styles.optionalText}>Picture001.jpeg</Text>
            </View>
            <Text style={styles.labelText}>Payer:</Text>
            <View style={styles.payerView}>
              <View style={styles.iconView}>
                <Image source={User1} style={styles.avatar} />
              </View>
              <View style={styles.payerInfoView}>
                <Text style={styles.nameText}>Mother</Text>
                <Text style={styles.phoneText}>+1-202-555-0114</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomView}>
            <ImageBackground source={FrameImage} resizeMode="stretch" style={styles.frameView}>
              <Text style={styles.normalText}>Payment Amount:</Text>
              <Text style={styles.normalText}>$100</Text>
              <Text style={styles.normalText}>Payment Interest</Text>
              <Text style={styles.normalText}>7%</Text>
              <Text style={styles.normalText}>Service Fee:</Text>
              <Text style={styles.normalText}>5%</Text>
              <Text style={styles.normalText}>Total Payment Amount:</Text>
              <Text style={styles.normalText}>$160</Text>
              <Text style={styles.normalText}>Number of Payments:</Text>
              <Text style={styles.normalText}>6</Text>
              <Text style={styles.normalText}>Initial Payment Date:</Text>
              <Text style={styles.normalText}>May 1, 2018</Text>
            </ImageBackground>
            <Table borderStyle={{ borderWidth: 1, borderColor: Color.lightgray }}>
              <Row data={this.state.tableHead} flexArr={[1, 3, 3, 3, 3]} style={styles.tableHead} textStyle={styles.tableHeadText} />
              <TableWrapper style={styles.wrapper}>
                <Col data={this.state.tableTitle} style={styles.title} heightArr={[50]} textStyle={styles.text} />
                <Rows data={this.state.tableData} flexArr={[3, 3, 3, 3]} style={styles.row} textStyle={styles.text} />
              </TableWrapper>
            </Table>
            <Text style={styles.smallText}>
              Monthly payment will be automatically deducted from your bank account based on payment schedule above
            </Text>
            <CustomButton
              text="Next"
              backgroundColor={Color.blue}
              color={Color.white}
              onPress={this.onPressNext.bind(this)}
              style={styles.button}
            />
          </View>
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
  button: {
    width: dynamicSize(335),
    marginLeft: dynamicSize(10),
    marginBottom: dynamicSize(30)
  },
  labelText: {
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
  payerView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: dynamicSize(335),
    height: dynamicSize(50)
  },
  iconView: {
    width: dynamicSize(50),
    height: dynamicSize(50),
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
  },
  avatar: {
    width: dynamicSize(50),
    height: dynamicSize(50)
  },
  payerInfoView: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: dynamicSize(20)
  },
  nameText: {
    fontSize: getFontSize(20),
    color: Color.black
  },
  phoneText: {
    fontSize: getFontSize(16),
    color: Color.darkblue,
    marginTop: dynamicSize(10)
  },
  frameView: {
    padding: dynamicSize(20),
    width: dynamicSize(355),
    marginBottom: dynamicSize(20)
  },
  topView: {
    padding: dynamicSize(20)
  },
  bottomView: {
    padding: dynamicSize(10)
  },
  normalText: {
    color: Color.text,
    marginVertical: dynamicSize(2),
    fontSize: getFontSize(18)
  },
  tableHead: {
    height: dynamicSize(60),
    backgroundColor: Color.darkblue
  },
  tableHeadText: {
    fontSize: getFontSize(12),
    color: Color.white,
    textAlign: 'center'
  },
  wrapper: {
    flexDirection: 'row'
  },
  title: {
    flex: 1,
  },
  row: {
    height: dynamicSize(50)
  },
  text: {
    textAlign: 'center',
    fontSize: getFontSize(16),
    color: Color.text,
    paddingVertical: dynamicSize(10)
  },
  smallText: {
    paddingHorizontal: dynamicSize(55),
    paddingVertical: dynamicSize(20),
    textAlign: 'center',
    fontSize: getFontSize(14),
    color: Color.text
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(SubmitRequest);
