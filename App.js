/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen';
import HomeScreen from './src/components/HoneScreen';
import SignUpScreen from './src/components/SignUpScreen'
import CreateAccountScreen from './src/components/CreateAccountScreen';
import { connect } from 'react-redux';
import { testAction } from './src/action/test';
import { saveToken } from './src/action/saveToken';
import store from './store';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import UserList from './src/components/UserList';
import UserEdit from './src/components/UserEdit';
import UserNew from './src/components/UserNew';
import MyListItem from './src/components/MyListItem';
import NewUser from './src/components/NewUser';
import Dashboard from './src/components/Dashboard';


export const NavigationApp = StackNavigator({
  Home: { screen: HomeScreen},
  Account: { screen: CreateAccountScreen},
  Login: { screen: LoginScreen},
  SignUp: { screen: SignUpScreen},
  UserList: { screen: UserList},
  UserEdit: { screen: UserEdit },
  UserNew: { screen: UserNew },
  MyListItem: { screen: MyListItem },
  NewUser: { screen: NewUser},
  Dashboard: { screen: Dashboard}
})

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      token: null
    }
  }
  async componentWillMount() {
    try {
      const token = await AsyncStorage.getItem('token');
      console.log('in app.js token = ', token)
      const data = { status: true, message: 'Initial things.' }
      store.dispatch(testAction(data)); 
      store.dispatch(saveToken(token));
      this.setState({ token: token });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    console.log('App');
    console.log(this.props);
    return(
      
         <NavigationApp />
      
    )
  }
}


const mapStateToProps = ({ test, token }) => ({ test, token })
export default connect(mapStateToProps)(App);