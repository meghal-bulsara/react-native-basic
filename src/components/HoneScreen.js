import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return(
            <View>
                <Button title= "Create Account"
                    onPress={() => navigate('Account')} />
                <Button title = "Login"
                    onPress={() => navigate('Login')} />
                <Button title = "SignUp" 
                    onPress={() => navigate('SignUp')} />
            </View>
        )
    }
}