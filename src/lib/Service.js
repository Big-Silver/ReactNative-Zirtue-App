import {
  Platform
} from 'react-native';
import { ContactData } from '../constants';

const Contacts = require('react-native-contacts');


export const getContactList = (callback) => {
  Contacts.getAll((err, contacts) => {
    if (err === 'denied') {
      // error
    } else {
      // contacts returned in []
      const data = ContactData;
      console.log(contacts);
      const result = {};
      data.map((contact) => {
        let keyString = contact.familyName === '' ? 'null' : contact.familyName.substring(0, 1);
        if (Platform.OS === 'android' && contact.givenName.split(' ').length > 1) {
          keyString = contact.givenName.split(' ')[1].substring(0, 1);
        }
        keyString = keyString.toUpperCase();
        if (result[keyString] === undefined) {
          result[keyString] = [contact];
        } else {
          result[keyString].push(contact);
        }
      });
      const array = [];
      Object.keys(result).map((key) => {
        array.push({
          key,
          list: result[key]
        });
      });
      array.sort((a, b) => {
        return a.key > b.key;
      });
      callback(array);
    }
  });
};
