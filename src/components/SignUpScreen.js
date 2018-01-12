import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createUser } from '../api/User'

export default class SignUpScreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            account_id: ''
        }
    }

    submitUserForm = async (e) => {
        console.log('User', this.state);
        console.log('inside user submit form')
        try{
            userResponse = await createUser(this.state);
            console.log('userResponse', userResponse)
        }
        catch(error) {
            console.log(error);
        }
    }
    
    render() {
        console.log('Welcome',this.state)
        return (
            <View>
                <Text>Email</Text>
                <TextInput placeholder='Enter Email ID'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.email}
                    onChangeText={(text) => this.setState({email: text})} />
                <Text>Password</Text>
                <TextInput placeholder='Enter Password'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})} />
                <Text>Account Id</Text>
                <TextInput placeholder='Enter Account ID'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.account_id}
                    onChangeText={(text) => this.setState({account_id: text})} />
                <Button title= "SignUp"
                    onPress={this.submitUserForm} />
            </View>
        )
    }
}