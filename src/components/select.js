import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import ModalDropdown from 'react-native-modal-dropdown';

import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

export default class CustomPicker extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
    label: PropTypes.string
  }

  static defaultProps = {
    value: '',
    label: 'none'
  }

  constructor(props) {
    super(props);
    this.state = {
      Hidden: true,
    };
  }

  render() {
    const { data, value, label, placeholder } = this.props;
    const { Hidden } = this.state;
    const themeColor = !Hidden ? Color.darkblue : Color.lightgray;
    console.log(placeholder);
    return (
      <View style={styles.container}>
        {
          label === 'none' ? null
          :
          <Text style={styles.labelText}>{label}</Text>
        }
        <View style={[styles.modalContainer, { borderColor: themeColor }]}>
          <View style={[styles.iconView, { borderLeftColor: themeColor }]}>
            <Icon
              name={!Hidden ? 'ios-arrow-up' : 'ios-arrow-down'}
              style={[styles.icon, { color: !Hidden ? Color.text : Color.gray }]}
            />
          </View>
          <ModalDropdown
            options={data}
            textStyle={styles.textStyle}
            dropdownStyle={[styles.dropdownStyle, { borderColor: themeColor }]}
            dropdownTextStyle={styles.textStyle}
            renderRow={option => (
              <TouchableOpacity><Text style={styles.option}>{option}</Text></TouchableOpacity>
            )}
            onSelect={option => this.props.onSelect(data[option])}
            onDropdownWillShow={() => this.setState({ Hidden: false })}
            onDropdownWillHide={() => this.setState({ Hidden: true })}
          >
            <Text style={styles.text}>{value}</Text>
          </ModalDropdown>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    marginBottom: dynamicSize(20),
    width: dynamicSize(335)
  },
  labelText: {
    fontSize: getFontSize(16),
    color: Color.gray,
    marginBottom: dynamicSize(5)
  },
  modalContainer: {
    height: dynamicSize(50),
    width: dynamicSize(335),
    justifyContent: 'center',
    borderRadius: dynamicSize(4),
    borderWidth: 1,
    backgroundColor: Color.light,
    position: 'relative'
  },
  text: {
    fontSize: getFontSize(16),
    color: Color.text,
    paddingHorizontal: dynamicSize(10),
  },
  option: {
    paddingHorizontal: dynamicSize(15),
    paddingVertical: dynamicSize(10),
    borderWidth: 0,
    fontSize: getFontSize(18)
  },
  textStyle: {
    fontSize: getFontSize(16),
    color: Color.text,
    paddingHorizontal: dynamicSize(10),
    paddingRight: dynamicSize(45)
  },
  dropdownStyle: {
    borderBottomLeftRadius: dynamicSize(4),
    borderBottomRightRadius: dynamicSize(4),
    borderWidth: 1,
    backgroundColor: Color.light,
    width: dynamicSize(335),
    height: dynamicSize(200),
    marginTop: dynamicSize(14)
  },
  iconView: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: dynamicSize(45),
    borderLeftWidth: 1,
    borderLeftColor: Color.lightgray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    fontSize: getFontSize(20),
  }
};
