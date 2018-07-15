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
import { User1, User2 } from '../../constants/images';
import * as Service from '../../lib/Service';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomHeader from '../../components/header';
import CustomButton from '../../components/button';

class SelectPayer extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      togglelistData: [],
      checkList: [],
      keys: {},
      toggleType: 'All',
      editing: false
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

  onPressManual() {
    this.props.navigation.navigate('invite_payer');
  }

  onPressNext() {
    this.props.navigation.navigate('submit_request');
  }

  onPressContact(contact) {
    this.props.navigation.navigate('submit_request', { contact });
  }

  onPressKey(key) {
    this.listView.scrollToIndex({
      index: this.state.keys[key],
      viewOffset: dynamicSize(10)
    });
  }

  onToggle(toggleType) {
    this.setState({ toggleType });
    if (toggleType === 'All') {
      this.setState({ togglelistData: this.state.listData.slice(0, 2) });
    } else {
      this.setState({ togglelistData: this.state.listData });
    }
  }

  onPressEdit() {
    if (this.state.editing) {
      // Done
      this.setState({ editing: false });
    } else {
      this.setState({ editing: true });
    }
  }

  onRemoveList() {

  }

  onAddList() {
    if (this.state.checkList.length > 0) return;
    this.props.navigation.navigate('select_friend');
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

  getContactList() {
    Service.getContactList((data) => {
      const keys = {};
      let index = 0;
      data.map((item) => {
        keys[item.key] = index;
        index += 1;
      });
      this.setState({ listData: data, keys, togglelistData: data.slice(0, 2) });
    });
  }

  _renderToggleListItem = ({ item }) => (
    <View key={item.key}>
      {
        item.list.map((contact) => {
          const fullname = `${contact.givenName} ${contact.familyName}`;
          return (
            <TouchableOpacity
              key={contact.recordID}
              onPress={this.onPressContact.bind(this, contact)}
              style={styles.listItem}
            >
              {
                this.state.editing && this.state.toggleType !== 'All' ?
                  <CheckBox
                    style={styles.checkbox}
                    onClick={this.onCheckContact.bind(this, contact)}
                    isChecked={(this.state.checkList.indexOf(contact.recordID) > -1)}
                    checkBoxColor={this.state.checkList.indexOf(contact.recordID) > -1 ? Color.darkblue : Color.lightgray}
                  />
                : contact.star === undefined ?
                  <View style={{ width: dynamicSize(30) }} />
                :
                  <Icon name="ios-star" style={styles.starIcon} />
              }
              <Image source={User2} style={styles.avatar} />
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

  _renderItem = ({ item }) => (
    <View key={item.key}>
      <Text style={styles.sectionHeader}>{item.key}</Text>
      {
        item.list.map((contact) => {
          const fullname = `${contact.givenName} ${contact.familyName}`;
          return (
            <TouchableOpacity
              key={contact.recordID}
              onPress={this.onPressContact.bind(this, contact)}
              style={styles.listItem}
            >
              {
                contact.star === undefined ?
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
    const { toggleType, listData, togglelistData, editing, checkList } = this.state;
    let topListStyle = { flex: 1 };
    if (toggleType === 'All') {
      topListStyle = {
        height: dynamicSize(170)
      };
    }
    return (
      <Container style={styles.container}>
        <CustomHeader
          title="Select Payer"
          left=""
          theme="blue"
          right="callPad"
          hasBackIcon
          onPressRight={this.onPressManual.bind(this)}
          onPressLeft={this.onBack.bind(this)}
        />
        <View style={styles.toggleButtonView}>
          <TouchableOpacity
            onPress={this.onToggle.bind(this, 'All')}
            style={[styles.toggleButton, { flex: 1, backgroundColor: toggleType === 'All' ? Color.blue : 'transparent' }]}
          >
            <Text style={{ color: toggleType === 'All' ? Color.white : Color.text }}>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onToggle.bind(this, 'Family Members')}
            style={[styles.toggleButton, { flex: 1.5, backgroundColor: toggleType === 'Family Members' ? Color.blue : 'transparent' }]}
          >
            <Text style={{ color: toggleType === 'Family Members' ? Color.white : Color.text }}>Family Members</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.onToggle.bind(this, 'Friends')}
            style={[styles.toggleButton, { flex: 1, backgroundColor: toggleType === 'Friends' ? Color.blue : 'transparent' }]}
          >
            <Text style={{ color: toggleType === 'Friends' ? Color.white : Color.text }}>Friends</Text>
          </TouchableOpacity>
        </View>
        <View style={topListStyle}>
          <View style={styles.toggleTitleView}>
            <Text style={styles.contactText}>{toggleType === 'All' ? 'Last Requests' : toggleType}</Text>
            {
              toggleType === 'All' ? null
              : editing ?
                <TouchableOpacity onPress={this.onPressEdit.bind(this)}>
                  <Icon name="md-checkmark" style={styles.doneIcon}> Done</Icon>
                </TouchableOpacity>
              :
                <TouchableOpacity onPress={this.onPressEdit.bind(this)}>
                  <Icon name="md-create" style={styles.editIcon} />
                </TouchableOpacity>
            }
          </View>
          <FlatList
            style={topListStyle}
            ref={ref => this.listView = ref}
            data={togglelistData} // required array|object
            renderItem={this._renderToggleListItem}
          />
        </View>
        {
          toggleType === 'All' ?
            <View style={styles.content}>
              <Text style={styles.contactText}>Contacts</Text>
              <View style={styles.listView}>
                <FlatList
                  ref={ref => this.listView = ref}
                  contentContainerStyle={{ paddingBottom: dynamicSize(40) }}
                  data={listData} // required array|object
                  renderItem={this._renderItem}
              />
                {this.renderKeyBar()}
              </View>
            </View>
          : null
        }
        {
          editing && toggleType !== 'All' ?
            <View style={styles.editButtonView}>
              <TouchableOpacity
                style={checkList.length > 0 ? styles.removeButtonEnabled : styles.removeButtonDisabled}
                onPress={this.onRemoveList.bind()}
              >
                <Text style={checkList.length > 0 ? styles.removeTextEnabled : styles.removeTextDisabled}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={checkList.length > 0 ? styles.addButtonDisabled : styles.addButtonEnabled}
                onPress={this.onAddList.bind(this)}
              >
                <Text style={styles.addButtonText}>Add to Group</Text>
              </TouchableOpacity>
            </View>
          :
            <CustomButton
              text="Next"
              backgroundColor={Color.blue}
              color={Color.white}
              onPress={this.onPressNext.bind(this)}
              style={styles.button}
            />
        }

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
  toggleButtonView: {
    backgroundColor: Color.lightgray,
    padding: 4,
    borderRadius: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: dynamicSize(335),
    margin: dynamicSize(20),
    height: dynamicSize(40)
  },
  toggleButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: dynamicSize(10)
  },
  contactText: {
    fontSize: getFontSize(25),
    color: Color.text,
    marginVertical: dynamicSize(10),
    marginLeft: dynamicSize(20)
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
    backgroundColor: Color.contactLight,
    paddingHorizontal: dynamicSize(20),
    paddingVertical: dynamicSize(5),
    fontSize: getFontSize(18),
    fontWeight: 'bold'
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
  keyBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    width: dynamicSize(20),
    paddingTop: dynamicSize(40),
    alignItems: 'center',
    backgroundColor: Color.white
  },
  rightKeyText: {
    fontSize: getFontSize(14),
    color: Color.blue
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
  button: {
    marginLeft: dynamicSize(20),
    marginBottom: dynamicSize(30)
  },
  toggleTitleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  editIcon: {
    fontSize: getFontSize(20),
    color: Color.darkblue,
    marginHorizontal: dynamicSize(20)
  },
  doneIcon: {
    fontSize: getFontSize(20),
    color: Color.green,
    marginHorizontal: dynamicSize(20)
  },
  checkbox: {
    height: dynamicSize(20),
    width: dynamicSize(20),
    marginRight: dynamicSize(10)
  },
  editButtonView: {
    flexDirection: 'row',
    paddingHorizontal: dynamicSize(10),
    height: dynamicSize(50),
    marginBottom: dynamicSize(30),
    marginTop: dynamicSize(20)
  },
  removeButtonDisabled: {
    flex: 1,
    marginHorizontal: dynamicSize(10),
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: 'transparent',
    borderColor: Color.lightgray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeButtonEnabled: {
    flex: 1,
    marginHorizontal: dynamicSize(10),
    borderWidth: 2,
    borderRadius: 6,
    backgroundColor: 'transparent',
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  removeTextEnabled: {
    color: 'red',
    fontSize: dynamicSize(16)
  },
  removeTextDisabled: {
    color: Color.lightgray,
    fontSize: dynamicSize(16)
  },
  addButtonDisabled: {
    flex: 1,
    marginHorizontal: dynamicSize(10),
    borderRadius: 6,
    backgroundColor: Color.lightgray,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonEnabled: {
    flex: 1,
    marginHorizontal: dynamicSize(10),
    borderRadius: 6,
    backgroundColor: Color.blue,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButtonText: {
    color: Color.white,
    fontSize: dynamicSize(16)
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(SelectPayer);
