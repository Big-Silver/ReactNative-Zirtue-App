import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import DatePicker from 'react-native-datepicker';

import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';
import { calendarIcon } from '../constants/images';

export default class CustomDatePicker extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string
  }

  static defaultProps = {
    label: 'none'
  }

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { value, label, placeholder } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.labelText}>{label}</Text>
        <View style={{ position: 'relative' }}>
          <DatePicker
            style={{
              width: dynamicSize(335),
              marginTop: dynamicSize(5),
              marginBottom: dynamicSize(10),
              height: dynamicSize(60),
              paddingTop: 10,
              margin: 0
            }}
            date={value}
            mode="date"
            placeholder={placeholder}
            format="YYYY-MM-DD"
            minDate="1900-01-01"
            maxDate="2018-04-25"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            showIcon={false}
            customStyles={{
                dateIcon: {
                  position: 'absolute',
                  right: dynamicSize(5),
                  top: 4,
                },
                dateText: {
                  textAlign: 'left'
                },
                dateInput: {
                  height: dynamicSize(50),
                  borderColor: Color.lightgray,
                  borderRadius: 4,
                  backgroundColor: Color.light,
                  alignItems: 'flex-start',
                  paddingLeft: dynamicSize(10),
                  //marginTop: 10
                }
                // ... You can check the source to find the other keys.
              }}
            onDateChange={date => this.props.onChange(date)}
            />
          <View style={styles.icon}>
            <Image source={calendarIcon} style={styles.DOBIcon} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    paddingVertical: dynamicSize(20),
    width: dynamicSize(335)
  },
  labelText: {
    fontSize: getFontSize(16),
    color: Color.text,
    marginBottom: dynamicSize(5)
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: 10,
    bottom: 0,
    width: dynamicSize(45),
    height: dynamicSize(50),
    borderLeftWidth: 1,
    borderLeftColor: Color.lightgray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  DOBIcon: {
    width: dynamicSize(16),
    height: dynamicSize(17),
    resizeMode: 'stretch'
  }
};
