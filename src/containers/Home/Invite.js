import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Container, Icon } from 'native-base';
import Permissions from 'react-native-permissions';

import { Color } from '../../constants';
import * as Service from '../../lib/Service';
import { dynamicSize, getFontSize } from '../../helpers/DynamicSize';
import CustomHeader from '../../components/header';

class Invite extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      listData: [],
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

  onSkip() {
    this.props.navigation.navigate('tabs');
  }

  onContinue() {

  }

  onPressContact(user) {
    alert(JSON.stringify(user));
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
      {
        this.state.searchText.length > 0 ? null
        :
        <Text style={styles.sectionHeader}>{item.key}</Text>
      }
      {
        item.list.map((contact) => {
          const fullname = `${contact.givenName} ${contact.familyName}`;
          if (fullname.indexOf(this.state.searchText) < 0) return null;
          return (
            <TouchableOpacity
              key={contact.recordID}
              onPress={this.onPressContact.bind(this, contact)}
              style={styles.nameView}
            >
              <Text style={styles.nameText}>{fullname}</Text>
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
    return (
      <Container style={styles.container}>
        <CustomHeader
          title=""
          left="Skip"
          right="Continue"
          onPreesRight={this.onContinue.bind(this)}
          onPressLeft={this.onSkip.bind(this)}
        />
        <View style={styles.content}>
          <View style={styles.topView}>
            <Text style={styles.contactText}>Contacts</Text>
            <View style={styles.searchView}>
              <Icon name="search" style={styles.icon} />
              <TextInput
                style={styles.searchInput}
                placeholder="Search"
                onChangeText={text => this.setState({ searchText: text })}
              />
              <Icon name="ios-mic" style={styles.icon} />
            </View>
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
    fontSize: getFontSize(40),
    color: Color.black,
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
  nameView: {
    marginLeft: dynamicSize(20),
    borderBottomWidth: 1,
    borderBottomColor: Color.contactLight,
    backgroundColor: Color.white
  },
  nameText: {
    paddingVertical: dynamicSize(15),
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
  }
};

function mapStateToProps(state) {
  return {
    state,
  };
}

export default connect(mapStateToProps, undefined)(Invite);
