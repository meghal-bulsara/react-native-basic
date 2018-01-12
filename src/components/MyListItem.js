import React, { Component } from 'react';
import { AppRegistry, FlatList, StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import UserEdit from './UserEdit';
import { connect } from 'react-redux';


class MyListItem extends React.PureComponent {
    constructor(props){
        super(props)
    }
    render() {
        // const { navigate } = this.props.navigation
        console.log("=============>", this.props)
        return (
            <TouchableOpacity >
                <View style={styles.container}>
                    <View style={styles.separator}>
                        <Text style={styles.sectionHeader}>{this.props.title.username}</Text>
                        <Text style={styles.item}>{this.props.title.email}</Text>
                        {/* <Button title="Edit" /> */}
                        <Button title="Edit" onPress={() => this.props.navigation.navigate('UserEdit')} />
                    </View>
                </View>
            </TouchableOpacity>
        );
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

export default connect(mapStateToProps)(MyListItem)