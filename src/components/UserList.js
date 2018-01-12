import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { allUsers } from '../api/User';
import { connect } from 'react-redux';
import store from '../../store';
import { fetchUsers } from '../action/users';
import UserNew from './UserNew';
import UserEdit from './UserEdit';
import NewUser from './NewUser';

class MyListItem extends React.PureComponent {
    render() {
        // const { navigate } = this.props.navigation

        console.log("Props : =============>", this.props)
        return (
            <View style={styles.container}>
                <View style={styles.separator}>
                    <Text style={styles.sectionHeader}>{this.props.user.username}</Text>
                    <Text style={styles.item}>{this.props.user.email}</Text>
                    <Button title="Edit" onPress={() => this.props.navigation.navigate('UserEdit')} />
                </View>
            </View>
        );
    }
}


class UserList extends React.Component{    
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentWillMount() {
        store.dispatch(fetchUsers())
        // try {
        //   const userResponse =  allUsers(this.props.token);
        //   store.dispatch(fetchUsers(userResponse));
        // } catch (error) {
        //   console.log(error);
        // }
    }

    renderItem = ({ item }) => {
        return (<MyListItem
            id={item.id}
            user={item}
            navigation={this.props.navigation}
        />);
    }

    render() {
        console.log('in users list', this.props)
        const userData = this.props.users;
        const { navigate } = this.props.navigation;
        return(
            <View style={styles.container}>
                <Button title="Add User" onPress={() => navigate('NewUser')}/>
                <FlatList
                    data={this.props.users}
                    extraData={this.state}
                    keyExtractor={this._keyExtractor}
                    renderItem={this.renderItem.bind(this)}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
     separator: {
        flex: 1, 
        borderWidth: 1, 
        borderColor: 'black'
        },
})


const mapStateToProps = ({ token, users }) => ({ token, users })

export default connect(mapStateToProps)(UserList)