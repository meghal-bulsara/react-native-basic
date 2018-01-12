import React, { Component } from 'react';
import UserForm from './UserForm';
// import { updateUser } from './../api/users';
import { connect } from 'react-redux';

class UserEdit extends Component {
    constructor(props) {
        debugger
        super(props);
        console.log(props)

        const user = this.props.user;
        this.state = {
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password,
            account_id: user.account_id
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
        // console.log(this.state);
        try {
            const userResponse = await updateUser(this.state, this.props.token);
            console.log(userResponse);
            if (userResponse.success) {
                console.log('success')
            } 
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <UserForm
                formLabel='Edit User'
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
        );
    }
}

const mapStateToProps = ({ token }) => ({ token })

export default connect(mapStateToProps)(UserEdit);