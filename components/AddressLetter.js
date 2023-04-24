import { StyleSheet, Text, TextInput, ScrollView, View, TouchableHighlight, Alert} from 'react-native';
import {Component} from 'react';
import AddressBookitem from './AddressBookItem';
import {Singleton} from '../utils/Singleton';



export default class AddressLetter extends Component {

    render(){

        let s = new Singleton();
        let addresses = s.getAddressList();

        return(
            addresses.map(address => {
                return(
                    <TouchableHighlight onPress={() => {Alert.alert("prova!")}}>
                        <View style = {this.styles.globalView}>
                            <Text style = {this.styles.text}>{address.name} {address.surname}</Text>
                        </View>
                    </TouchableHighlight>
                );
            })
        );
    }

    styles = StyleSheet.create({
        globalView: {
            width: '85%',
            /* backgroundColor: 'pink', */
            flex: 1,
            borderTopWidth: 1,
            borderColor: '#ccc',
            padding: 15,
            justifyContent: 'center',
            marginLeft: 20, 
        },

        text: {
            fontSize: 15,
            fontWeight: 'bold', 
        },
    })
}

