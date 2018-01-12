import React, { Component } from 'react';
import UserForm from './UserForm';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { createUser } from '../api/User'
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import UserList from './UserList'

class NewUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        email: '',
        password: '',
        username: '',
        account_id: ''
        };
    }
    updateUserName(text) {
        this.setState({ username: text })
    }

    updateEmail(text) {
        this.setState({ email: text });
    }

    updatePassword(text) {
        this.setState({ password: text });
    }

    updateAccountId(text) {
        this.setState({ account_id: text });
    }


    submitUserForm = async (e) => {
        console.log('User', this.state);
        console.log('token', this.props.token)
        console.log('inside user submit form')
        try {
            userResponse = await createUser(this.state, this.props.token);
            console.log('userResponse', userResponse)
            if (userResponse) {
                this.props.navigation.navigate('UserList');
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    
    render() {
        console.log('Welcome',this.state)
        const { navigate } = this.props.navigation;
        return (
            <UserForm
                userName={this.state.username}
                email={this.state.email}
                password={this.state.password}
                accountId={this.state.account_id}
                updateUserName={this.updateUserName.bind(this)}
                updateEmail={this.updateEmail.bind(this)}
                updatePassword={this.updatePassword.bind(this)}
                updateAccountId={this.updateAccountId.bind(this)}
                submitUserForm={this.submitUserForm}
            />
        )
    }
}

const mapStateToProps = ({ token }) => ({ token })

export default connect(mapStateToProps)(NewUser);