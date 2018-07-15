import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  // Dimensions,
  Text,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { GiftedChat, InputToolbar, Actions as ActionButtons } from 'react-native-gifted-chat';
import { Icon } from 'react-native-elements';
// import SvgUri from 'react-native-svg-uri';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';

// const { width } = Dimensions.get('window');
const ImagePicker = require('react-native-image-picker');
const user2 = require('../../assets/images/user2.png');
const addIcon = require('../../assets/images/attachIcon.png');

class Message extends Component {
  static navigationOptions = (props) => {
    return {
      title: 'Mother',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#2B72BF',
        height: dynamicSize(60),
        borderBottomWidth: 0
      },
      headerLeft: (
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Icon
            iconStyle={{ marginLeft: dynamicSize(10) }}
            name="chevron-left"
            type="material"
            color="#fff"
            size={30}
          />
        </TouchableOpacity>
      ),
      headerRight: (
        <TouchableOpacity>
          <Image source={user2} style={{ width: dynamicSize(30), height: dynamicSize(30), borderRadius: dynamicSize(15), marginRight: dynamicSize(10) }} />
        </TouchableOpacity>
      ),
    };
  }

  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Did you received the money correctly?',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: user2,
          },
        },
      ],
    });
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
  }

  openPicker() {
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // this.onSendImage(response);
      }
    });
  }

  renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}
        placeholder="Message"
        placeholderTextColor="rgba(13, 9, 37, 0.4)"
        containerStyle={styles.containerStyle}
        textInputStyle={styles.textInputStyle}
      />
    );
  }

  renderActions = (props) => {
    return (
      <ActionButtons
        {...props}
        icon={this.renderIcon.bind(this)}
      />
    );
  }

  renderIcon() {
    return (
      <View style={[styles.wrapperAddBtn]}>
        <Image width="22" height="22" source={addIcon} style={styles.addBtn} />
      </View>
    );
  }

  renderSend = (props) => {
    const { text, onSend } = props;
    return (
      <TouchableOpacity
        style={[styles.sendContainer]}
        onPress={() => {
          if (text.trim().length > 0) onSend({ text: text.trim() }, true);
        }}
        accessibilityTraits="button">
        <View>
          <Text style={styles.sendIcon}>
            👍🏼
          </Text>
        </View>
      </TouchableOpacity>
    );
  }

  // renderTime = (props) => {
  //   const style = { left: styles.timeStyle1, right: styles.timeStyle2 };
  //   return (
  //     <Time {...props} textStyle={style} />
  //   );
  // }

  render() {
    return (
      <View style={styles.content}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
          renderActions={this.renderActions}
          renderInputToolbar={this.renderInputToolbar}
          renderSend={this.renderSend}
          onPressActionButton={() => {
            this.openPicker();
          }}
          // renderTime={this.renderTime}
          // wrapperStyle={{ styles.wrapperStyle1, right: styles.wrapperStyle2 }}
          // textStyle={{ left: styles.textStyle1, right: styles.textStyle2 }}
          listViewProps={{ indicatorStyle: 'white' }}
        />
      </View>
    );
  }
}

const styles = {
  content: {
    flex: 1,
    backgroundColor: 'white'
  },
  containerStyle: {
    padding: dynamicSize(5),
  },
  textInputStyle: {
    color: 'black',
    borderWidth: 1,
    borderRadius: dynamicSize(18),
    paddingTop: dynamicSize(10),
    paddingBottom: dynamicSize(10),
    paddingLeft: dynamicSize(10),
    borderColor: 'rgba(13, 9, 37, 0.2)'
  },
  wrapperAddBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  addBtn: {
    width: dynamicSize(22),
    height: dynamicSize(22)
  },
  sendContainer: {
    width: dynamicSize(40),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: dynamicSize(5)
  },
  sendIcon: {
    fontSize: getFontSize(20),
    marginBottom: dynamicSize(5)
  },
  wrapperStyle1: {
    backgroundColor: '#292929',
    borderTopLeftRadius: dynamicSize(4),
    borderTopRightRadius: dynamicSize(4),
    borderBottomLeftRadius: dynamicSize(16),
    borderBottomRightRadius: dynamicSize(4),
    marginTop: dynamicSize(16),
  },
  wrapperStyle2: {
    backgroundColor: '#D8D8D8',
    borderTopLeftRadius: dynamicSize(4),
    borderTopRightRadius: dynamicSize(4),
    borderBottomLeftRadius: dynamicSize(4),
    borderBottomRightRadius: dynamicSize(14),
    marginTop: dynamicSize(14),
  },
  textStyle1: {
    color: '#FFFFFF',
    fontSize: dynamicSize(14),
  },
  textStyle2: {
    color: '#4A4A4A',
    fontSize: dynamicSize(14),
  },
  timeStyle1: {
    color: '#FFFFFF',
    fontSize: dynamicSize(9),
  },
  timeStyle2: {
    color: '#4A4A4A',
    fontSize: dynamicSize(9),
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(Message);
