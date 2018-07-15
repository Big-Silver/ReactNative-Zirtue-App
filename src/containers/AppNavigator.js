import React from 'react';
import {
  Platform
} from 'react-native';
import {
  StackNavigator,
  TabNavigator,
  TabBarBottom
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import SvgUri from 'react-native-svg-uri';
import Auth from './Auth';
import NormalSignUp from './Auth/NormalSignup';
import PhoneSignIn from './Auth/PhoneSignIn';
import PhoneSignInCode from './Auth/PhoneSignInCode';
import EmailSignIn from './Auth/EmailSignIn';
import EmailSignInCode from './Auth/EmailSignInCode';
import ForgotPassword from './Auth/ForgotPassword';
import ResetPassword from './Auth/ResetPassword';
import Invite from './Home/Invite';
import CreateNewAmount from './PaymentRequest/CreateNewAmount';
import Activity from './Activity';
import Dashboard from './Dashboard';
import PaymentRequest from './PaymentRequest';
import CreatePaymentRequest from './PaymentRequest/CreatePaymentRequest';
import SelectPayer from './PaymentRequest/SelectPayer';
import SelectFriend from './PaymentRequest/SelectFriend';
import Profile from './Profile';
import Message from './Activity/Message';
import PaymentDetail from './PaymentDetail';
import ManualPayment from './ManualPayment';
import OfflinePayment from './OfflinePayment';
import Payoff from './Payoff';
import InviteFamily from './InviteFamily';
import ShareInvite from './ShareInvite';
import InviteLink from './InviteLink';
import Settings from './Settings';
import Notifications from './Notifications';
import PushNotification from './PushNotification';
import TextNotification from './TextNotification';
import EmailNotification from './EmailNotification';
import EditProfile from './EditProfile';

import { dynamicSize } from '../helpers/DynamicSize';
import InvitePayer from './PaymentRequest/InvitePayer';
import SubmitRequest from './PaymentRequest/SubmitRequest';
import BankDetail from './PaymentRequest/BankDetail';

const dashboardIcon = require('../assets/images/dashboardIcon.svg');

const MainTabNavigator = TabNavigator(
  {
    activity: {
      screen: Activity,
      navigationOptions: {
        tabBarLabel: 'Activity',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-home" size={35} color={tintColor} />
        ),
      },
    },
    dashboard: {
      screen: Dashboard,
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({ tintColor }) => (
          Platform.OS === 'ios' ?
            <SvgUri width="30" height="30" source={dashboardIcon} fill={tintColor} />
            :
            <Icon name="ios-list-box" size={30} color={tintColor} />
        ),
      },
    },
    paymentRequest: {
      screen: PaymentRequest,
      navigationOptions: {
        tabBarLabel: 'Payment Request',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-cash" size={35} color={tintColor} />
        ),
      },
    },
    profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" size={35} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'rgba(43, 114, 191, 1)', // Color of tab when pressed
      inactiveTintColor: '#8E8E93', // Color of tab when not pressed
      showLabel: true,
      style: {
        backgroundColor: 'white',
        height: dynamicSize(60),
      },
    },
    tabBarPosition: 'bottom',
    tabBarComponent: TabBarBottom,
    swipeEnabled: false
  },
);

const MainNavigator = StackNavigator(
  {
    login: {
      screen: Auth,
    },
    normal_signup: {
      screen: NormalSignUp
    },
    phone_signin: {
      screen: PhoneSignIn
    },
    phone_signin_code: {
      screen: PhoneSignInCode,
    },
    email_signin: {
      screen: EmailSignIn
    },
    email_signin_code: {
      screen: EmailSignInCode
    },
    forgot_password: {
      screen: ForgotPassword
    },
    reset_password: {
      screen: ResetPassword
    },
    invite: {
      screen: Invite
    },
    create_new_amount: {
      screen: CreateNewAmount
    },
    create_payment_request: {
      screen: CreatePaymentRequest
    },
    select_payer: {
      screen: SelectPayer
    },
    select_friend: {
      screen: SelectFriend
    },
    invite_payer: {
      screen: InvitePayer,
    },
    submit_request: {
      screen: SubmitRequest
    },
    bank_detail: {
      screen: BankDetail
    },
    tabs: {
      screen: MainTabNavigator
    },
    message: {
      screen: Message,
    },
    paymentDetail: {
      screen: PaymentDetail,
    },
    manualPayment: {
      screen: ManualPayment,
    },
    offlinePayment: {
      screen: OfflinePayment,
    },
    payoff: {
      screen: Payoff,
    },
    inviteFamily: {
      screen: InviteFamily,
    },
    shareInvite: {
      screen: ShareInvite,
    },
    inviteLink: {
      screen: InviteLink,
    },
    settings: {
      screen: Settings,
    },
    notifications: {
      screen: Notifications,
    },
    pushNotifications: {
      screen: PushNotification,
    },
    textNotification: {
      screen: TextNotification,
    },
    emailNotification: {
      screen: EmailNotification,
    },
    editProfile: {
      screen: EditProfile,
    },
  },
);

export default MainNavigator;
