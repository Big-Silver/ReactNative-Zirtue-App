import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Modal from 'react-native-modal';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

const { width, height } = Dimensions.get('window');
const blueClose = require('../assets/images/blueClose.png');
const homeIcon = require('../assets/images/homeIcon.png');

const styles = StyleSheet.create({
  helpModal: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  modalContainer: {
    width,
    height: height - dynamicSize(20),
    backgroundColor: 'white',
    borderRadius: dynamicSize(9),
    marginTop: dynamicSize(70)
  },
  listview: {
    width: width - dynamicSize(20),
    marginLeft: dynamicSize(10),
    marginTop: dynamicSize(10)
  },
  modalHeader: {
    width: width - dynamicSize(20),
    flexDirection: 'row'
  },
  requestItem: {
    backgroundColor: '#F9FBFD',
    borderColor: '#E9EFF4',
    borderTopLeftRadius: dynamicSize(6),
    borderTopRightRadius: dynamicSize(6),
    marginTop: dynamicSize(10),
    paddingBottom: dynamicSize(10)
  },
  contentView: {
    width: width - dynamicSize(40),
    marginLeft: dynamicSize(10),
    borderBottomWidth: 1,
    borderBottomColor: '#F1F2F4',
    flexDirection: 'row',
    height: dynamicSize(60),
    alignItems: 'center'
  },
  title: {
    fontSize: getFontSize(14),
    color: '#000000'
  },
  value: {
    fontSize: getFontSize(16),
    color: '#2B72BF',
    paddingLeft: dynamicSize(10)
  },
  amount: {
    fontSize: getFontSize(14),
    color: '#417505',
    paddingLeft: dynamicSize(10)
  },
  date: {
    fontSize: getFontSize(14),
    color: '#5F5F5F',
    paddingLeft: dynamicSize(10)
  },
  payer: {
    flexDirection: 'row',
    paddingLeft: dynamicSize(10),
    alignItems: 'center'
  },
  avatar: {
    width: dynamicSize(30),
    height: dynamicSize(30),
    borderRadius: dynamicSize(15)
  },
  grayView: {
    width: width - dynamicSize(40),
    marginLeft: dynamicSize(10),
    borderBottomWidth: 0,
    borderBottomColor: '#F1F2F4',
    flexDirection: 'row',
    height: dynamicSize(60),
    alignItems: 'center'
  },
  grayText: {
    fontSize: getFontSize(14),
    color: 'rgba(0, 0, 0, 0.2)',
  },
  approvalView: {
    paddingLeft: dynamicSize(10)
  },
  detailBtn: {
    width: dynamicSize(160),
    height: dynamicSize(50),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1890FF',
    borderRadius: dynamicSize(6),
    flexDirection: 'row',
    marginTop: dynamicSize(20)
  },
  blueText: {
    fontSize: getFontSize(15),
    color: '#1890FF',
  },
  whiteText: {
    fontSize: getFontSize(15),
    color: '#FFFFFF',
    marginLeft: dynamicSize(10)
  },
  requestText: {
    fontSize: getFontSize(20),
    color: '#000000',
  },
  closeIcon: {
    width: dynamicSize(24),
    height: dynamicSize(24),
  },
  leftView: {
    width: (width - dynamicSize(20)) / 2
  },
  rightView: {
    width: (width - dynamicSize(20)) / 2,
    alignItems: 'flex-end'
  },
  bottomView: {
    width: width - dynamicSize(20),
    height: dynamicSize(150),
    // justifyContent: 'center',
    alignItems: 'center'
  },
  homeIcon: {
    width: dynamicSize(15),
    height: dynamicSize(18)
  }
});

export const RequestModal = ({ isVisible, onClose, requestDetail, goPaymentDetail }) => (
  <Modal
    isVisible={isVisible}
    style={styles.helpModal}
    // transparent
    animationInTiming={1}
  >
    <View style={styles.modalContainer}>
      <ScrollView contentContainerStyle={styles.listview}>
        <View style={styles.modalHeader}>
          <View style={styles.leftView}>
            <Text style={styles.requestText}>
              Request Info
            </Text>
          </View>
          <View style={styles.rightView}>
            <TouchableOpacity onPress={onClose}>
              <Image source={blueClose} style={styles.closeIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.requestItem}>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Request:
              </Text>
            </View>
            <View>
              <Text style={styles.value}>
                {requestDetail[0].id}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Request Amount:
              </Text>
            </View>
            <View>
              <Text style={styles.amount}>
                ${requestDetail[0].requestAmount}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Request Date:
              </Text>
            </View>
            <View>
              <Text style={styles.date}>
                {requestDetail[0].requestDate}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Request Status:
              </Text>
            </View>
            <View>
              <Text style={styles.amount}>
                {requestDetail[0].requestStatus}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Payer:
              </Text>
            </View>
            <View style={styles.payer}>
              <View>
                <Image source={requestDetail[0].payer.avatar} style={styles.avatar} />
              </View>
              <View>
                <Text style={styles.value}>
                  {requestDetail[0].payer.name}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Approval Date:
              </Text>
            </View>
            <View style={styles.approvalView}>
              <Text style={styles.date}>
                {requestDetail[0].approvalDate}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Funding Date:
              </Text>
            </View>
            <View style={styles.approvalView}>
              <Text style={styles.date}>
                {requestDetail[0].fundingDate}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Last Payment Date:
              </Text>
            </View>
            <View style={styles.approvalView}>
              <Text style={styles.date}>
                {requestDetail[0].lastPaymentDate}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Next Payment Date:
              </Text>
            </View>
            <View style={styles.approvalView}>
              <Text style={styles.date}>
                {requestDetail[0].nextPaymentDate}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Next Payment Amount:
              </Text>
            </View>
            <View style={styles.approvalView}>
              <Text style={styles.date}>
                {requestDetail[0].nextPaymentAmount}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Remaining Payments:
              </Text>
            </View>
            <View style={styles.approvalView}>
              <Text style={styles.date}>
                ${requestDetail[0].remaniningPayments}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Payment Balance:
              </Text>
            </View>
            <View style={styles.approvalView}>
              <Text style={styles.date}>
                ${requestDetail[0].paymentBalane}
              </Text>
            </View>
          </View>
          <View style={styles.contentView}>
            <View>
              <Text style={styles.title}>
                Payment Status:
              </Text>
            </View>
            <View style={styles.approvalView}>
              <Text style={styles.amount}>
                {requestDetail[0].paymentStatus}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity style={styles.detailBtn} onPress={goPaymentDetail}>
            <View>
              <Image source={homeIcon} style={styles.homeIcon} />
            </View>
            <Text style={styles.whiteText}>
              Details
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  </Modal>
);
