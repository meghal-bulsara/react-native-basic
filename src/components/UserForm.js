import React from 'react';
import { Text, View, Button, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

const UserForm = props => (
    <View>
        <View>
            <Text>{props.formText}</Text>
        </View>

        <View>
            <Text>User Name</Text>
            <TextInput autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false} 
                    type="text" 
                    value={props.userName} 
                    onChangeText={props.updateUserName} />
        </View>

        <View>
            <Text>Email</Text>
            <TextInput autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false}
                    type="email" 
                    value={props.email} 
                    onChangeText={props.updateEmail} />
        </View>

        <View>
            <Text>Password</Text>
            <TextInput autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false} 
                    type="text" 
                    value={props.password} 
                    onChangeText={props.updatePassword} />
        </View>

        <View>
            <Text>Account Id</Text>
            <TextInput autoCapitalize={'none'}
                    returnKeyType={'done'}
                    autoCorrect={false} 
                    type="text" 
                    value={props.accountId} 
                    onChangeText={props.updateAccountId} />
        </View>

        <View>
            <Button type="submit" onPress={props.submitUserForm} title='Submit' />
        </View>
    </View>
);

const mapStateToProps = ({ token }) => ({ token })

export default connect(mapStateToProps)(UserForm);