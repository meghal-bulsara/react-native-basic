import React, { Component } from 'react';
import {
    Text, View, AppRegistry, Button, StyleSheet, TextInput,
    TouchableOpacity,
    Image, } from 'react-native';
import eyeImg from '../images/eye_black.png';
import { logIn } from '../api/Login';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    submitUserLogin = async (e) => {
        try {
            const loginResponse = await logIn(this.state)
            console.log(loginResponse)
            if (loginResponse) {
                const token = loginResponse.object.token;
                await AsyncStorage.setItem('token', token)
                this.props.navigation.navigate('UserList');
            }
        } catch (error) {
        console.log(error);
        }
        // console.log(this.state);
    }
    
    render() {
        console.log('welcome', this.state)
        return (
            <View>
                 <Text>Email</Text>
                <TextInput placeholder='Enter Email ID'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={(text) => this.setState({ email: text})} />
                <Text>Password</Text>
                <TextInput placeholder='Enter Password'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({ password: text})} />
                
                <Button title="Login" onPress={this.submitUserLogin} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    btnEye: {
        position: 'absolute',
        top: 55,
        right: 28,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
});
