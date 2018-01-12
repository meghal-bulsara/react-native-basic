import React, { Component } from 'react';
import UserForm from './UserForm';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import { createUser } from '../api/User'
import { connect } from 'react-redux';

class UserNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
      account_id: ''
    };
  }

  // updateUserName = (e) => {
  //   this.setState({ username: this.state.username })
  // }

  // updateEmail = (e) => {
  //   this.setState({ email: e.target.value })
  // }

  // updatePassword = (e) => {
  //   this.setState({ password: e.target.value })
  // }

  // updateAccountId = (e) => {
  //   this.setState({ account_id: e.target.value })
  // }

  submitUserForm = async (e) => {
        console.log('User', this.state);
        console.log('token', this.props.token)
        console.log('inside user submit form')
        try{
            userResponse = await createUser(this.state, this.props.token);
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
                <Text>Username</Text>
                <TextInput placeholder='Enter Username'
                    autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})} />
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

const mapStateToProps = ({ token }) => ({ token })

export default connect(mapStateToProps)(UserNew);