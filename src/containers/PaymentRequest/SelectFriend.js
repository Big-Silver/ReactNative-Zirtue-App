import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Icon } from 'native-base';
import Permissions from 'react-native-permissions';
import CheckBox from 'react-native-check-box';

import { Color } from '../../constants';
import * as Service from '../../lib/Service';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomHeader from '../../components/header';
import CustomButton from '../../components/button';
import { User1 } from '../../constants/images';

class SelectFriend extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      checkList: [],
      keys: {}
    };
  }


  componentDidMount() {
    Permissions.check('contacts').then((response) => {
      // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
      if (response === 'authorized') {
        this.getContactList();
      } else {
        Permissions.request('photo').then((response) => {
          // Returns once the user has chosen to 'allow' or to 'not allow' access
          // Response is one of: 'authorized', 'denied', 'restricted', or 'undetermined'
          if (response === 'authorized') this.getContactList();
        });
      }
    });
  }

  onBack() {
    this.props.navigation.goBack();
  }

  onAddGroup() {

  }

  onCheckContact(contact) {
    const tempList = this.state.checkList;
    const index = tempList.indexOf(contact.recordID);
    if (index < 0) {
      tempList.push(contact.recordID);
    } else {
      tempList.splice(index, 1);
    }
    this.setState({ checkList: tempList });
  }

  onPressKey(key) {
    this.listView.scrollToIndex({
      index: this.state.keys[key],
      viewOffset: dynamicSize(10)
    });
  }

  getContactList() {
    Service.getContactList((data) => {
      const keys = {};
      let index = 0;
      data.map((item) => {
        keys[item.key] = index;
        index += 1;
      });
      this.setState({ listData: data, keys });
    });
  }

  _renderItem = ({ item }) => (
    <View key={item.key}>
      <Text style={styles.sectionHeader}>{item.key}</Text>
      {
        item.list.map((contact) => {
          const fullname = `${contact.givenName} ${contact.familyName}`;
          return (
            <TouchableOpacity
              key={contact.recordID}
              onPress={this.onCheckContact.bind(this, contact)}
              style={styles.listItem}
            >
              {
                this.state.checkList.indexOf(contact.recordID) > -1 ?
                  <CheckBox
                    style={styles.checkbox}
                    isChecked
                    onClick={() => {}}
                    checkBoxColor={Color.darkblue}
                  />
                : contact.star === undefined ?
                  <View style={{ width: dynamicSize(30) }} />
                :
                  <Icon name="ios-star" style={styles.starIcon} />
              }
              <Image source={User1} style={styles.avatar} />
              <View style={styles.infoView}>
                <Text style={styles.nameText}>{fullname}</Text>
                <Text style={styles.phoneText}>{contact.phoneNumbers[0].number}</Text>
              </View>
            </TouchableOpacity>
          );
        })
      }
    </View>
  );

  renderKeyBar() {
    return (
      <View style={styles.keyBar}>
        {
        this.state.listData.map((item) => {
          return (
            <TouchableOpacity key={item.key} onPress={this.onPressKey.bind(this, item.key)}>
              <Text style={styles.rightKeyText}>{item.key}</Text>
            </TouchableOpacity>
          );
        })
      }
      </View>
    );
  }

  render() {
    const { checkList } = this.state;
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Select Friend"
          left=""
          theme="blue"
          hasBackIcon
          onPressLeft={() => this.props.navigation.goBack()}
        />
        <View style={styles.content}>
          <View style={styles.topView}>
            <Text style={styles.contactText}>Contacts</Text>
          </View>
          <View style={styles.listView}>
            <FlatList
              ref={ref => this.listView = ref}
              contentContainerStyle={{ paddingBottom: dynamicSize(40) }}
              data={this.state.listData} // required array|object
              renderItem={this._renderItem}
            />
            {this.renderKeyBar()}
          </View>
        </View>
        <CustomButton
          text="Add to Group"
          backgroundColor={checkList.length > 0 ? Color.blue : Color.lightgray}
          color={Color.white}
          onPress={this.onAddGroup.bind(this)}
          style={styles.button}
        />
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
    flex: 1,
  },
  topView: {
    padding: dynamicSize(20)
  },
  contactText: {
    fontSize: getFontSize(30),
    color: Color.text,
  },
  searchView: {
    width: dynamicSize(335),
    height: dynamicSize(36),
    backgroundColor: Color.contactLight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: dynamicSize(10),
    borderRadius: dynamicSize(6),
    marginTop: dynamicSize(10)
  },
  icon: {
    fontSize: getFontSize(20),
    color: Color.gray
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: dynamicSize(15)
  },
  listView: {
    flex: 1,
    position: 'relative'
  },
  sectionHeader: {
    color: Color.text,
    paddingHorizontal: dynamicSize(20),
    paddingVertical: dynamicSize(5),
    fontSize: getFontSize(18),
    fontWeight: 'bold',
    marginTop: -2
  },
  nameView: {
    marginLeft: dynamicSize(20),
    borderBottomWidth: 1,
    borderBottomColor: Color.contactLight,
    backgroundColor: Color.white
  },
  keyBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: dynamicSize(20),
    paddingTop: dynamicSize(60),
    alignItems: 'center',
    backgroundColor: Color.white
  },
  rightKeyText: {
    fontSize: getFontSize(14),
    color: Color.blue
  },
  listItem: {
    height: dynamicSize(60),
    marginLeft: dynamicSize(20),
    borderBottomWidth: 1,
    borderBottomColor: Color.contactLight,
    backgroundColor: Color.white,
    flexDirection: 'row',
    alignItems: 'center'
  },
  nameText: {
    fontSize: getFontSize(18)
  },
  starIcon: {
    fontSize: getFontSize(20),
    color: Color.yellow,
    width: dynamicSize(30)
  },
  avatar: {
    width: dynamicSize(40),
    height: dynamicSize(40)
  },
  infoView: {
    height: dynamicSize(60),
    justifyContent: 'center',
    paddingHorizontal: dynamicSize(20)
  },
  phoneText: {
    paddingTop: dynamicSize(10),
    color: Color.darkblue
  },
  checkbox: {
    height: dynamicSize(20),
    width: dynamicSize(20),
    marginRight: dynamicSize(10)
  },
  button: {
    marginLeft: dynamicSize(20),
    marginBottom: dynamicSize(30)
  },
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(SelectFriend);
