import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import {CreateAccount} from '../api/CreateAccount'

export default class CreateAccountScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            business_name: '',
            username: '',
            email: '',
            password: '',
            subdomain: ''
        };
    }
    submitForm = async (e) => {
        try {
            const account = await CreateAccount(this.state)
            console.log(account)
            if(account.success){
                console.log('success')
                this.props.navigation.navigate('Login');
            }
        } catch (error) {
        console.log(error);
        }
        // console.log(this.state);
    }
    render() {
        console.log('welcome', this.state)
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Username</Text>
                <TextInput placeholder='Enter Username'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.username} 
                    onChangeText={(text) => this.setState({ username: text })} />
                <Text>Subdomain</Text>
                <TextInput placeholder='Enter Subdomain'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.subdomain}
                    onChangeText={(text) => this.setState({ subdomain: text})} />
                <Text>Business</Text>
                <TextInput placeholder='Enter Business Name'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.business}
                    onChangeText={(text) => this.setState({ business: text})} />
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
                <Button title="Create Account"
                onPress= {this.submitForm.bind(this)} />
            </View>
        )
    }
}