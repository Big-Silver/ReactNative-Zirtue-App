import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { Icon } from 'native-base';
import { Color } from '../constants';
import { dynamicSize, getFontSize } from '../helpers/DynamicSize';

export default class CustomInput extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    secure: PropTypes.bool,
    onChangeText: PropTypes.func.isRequired,
    keyboardType: PropTypes.string,
    errorText: PropTypes.string,
    isError: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onRef: PropTypes.func,
    editable: PropTypes.bool
  }

  static defaultProps = {
    placeholder: '',
    secure: false,
    keyboardType: 'default',
    errorText: '',
    isError: false,
    onRef: () => undefined,
    editable: true
  }

  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
  }

  componentDidMount() {
    this.props.onRef(this.input);
  }

  render() {
    const { placeholder, value, secure, keyboardType, editable, isError, errorText, label } = this.props;
    return (
      <View style={{ marginBottom: dynamicSize(20) }}>
        {
          label === 'none' ? null
          :
          <Text style={styles.labelText}>{label}</Text>
        }
        <View style={[styles.inputView, { borderColor: isError ? 'red' : this.state.focus ? Color.blue : Color.lightgray }]}>
          <TextInput
            ref={ref => this.input = ref}
            style={styles.input}
            placeholder={placeholder}
            secureTextEntry={secure}
            value={value}
            editable={editable}
            keyboardType={keyboardType}
            underlineColorAndroid="transparent"
            onChangeText={text => this.props.onChangeText(text)}
            onFocus={() => this.setState({ focus: true })}
            onBlur={() => this.setState({ focus: false })}
        />
        </View>
        {
          errorText.length > 0 && isError ?
            <View style={styles.errorView}>
              <Icon name="close" style={styles.errorIcon} />
              <Text style={styles.errorText}>{errorText}</Text>
            </View>
          : null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputView: {
    height: dynamicSize(50),
    padding: dynamicSize(10),
    justifyContent: 'center',
    borderRadius: dynamicSize(4),
    borderWidth: 1,
    backgroundColor: Color.light
  },
  input: {
    flex: 1,
    color: Color.black,
    padding: 0,
    margin: 0
  },
  labelText: {
    fontSize: getFontSize(16),
    color: Color.gray,
    marginBottom: dynamicSize(5)
  },
  errorView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: dynamicSize(5)
  },
  errorIcon: {
    color: 'red',
    fontSize: 12,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    paddingLeft: dynamicSize(5)
  }
});
