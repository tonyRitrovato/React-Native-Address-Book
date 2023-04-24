import { StyleSheet, Text, TextInput, ScrollView, View} from 'react-native';
import { Button } from '@rneui/themed';
import DatePicker from 'react-native-modern-datepicker';
import {Singleton} from '../utils/Singleton'
import AddressBookitem from '../components/AddressBookItem';
import { useState } from 'react';

export default function Add() {

    let s = new Singleton();

    const [name, setName] = useState('');

    return(
        <View style = {styles.globalView}>
            <View style = {styles.header}>
                <Button
                    title = {"aggiungi ai contatti"}
                    onPress = {() => {
                        console.log(name);
                        let addresses = s.getAddressList();
                        addresses.push(new AddressBookitem(name, "ritrovato", "tratturo", 11, 12));
                        s.setAddressList(addresses);
                    }}
                    titleStyle = {styles.textStyle}
                    type = "clear"
                    color = '#fff'
                    buttonStyle = {styles.buttonStyle}
                />
            </View>
            <View style = {styles.form}>
                <TextInput onChangeText={setName} style = {styles.formInput} placeholder='Nome'/>
                <TextInput style = {styles.formInput} placeholder='Cognome'/>
                <TextInput style = {styles.formInput} placeholder='Indirizzo'/>
                <TextInput style = {styles.formInput} keyboardType='numeric' placeholder='Numero Telefonico'/>
                <DatePicker 
                    style = {styles.dateInput}
                    
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    globalView: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        backgroundColor: 'white',
    },

    header:{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },

    form: {
        flex: 8,
        width: '100%',
        height: '100%',
    },

    dateInput: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 5,
        width: '100%',
        height: '100%',
    },

    formInput: {
        backgroundColor: '#fff',
        padding: 15,
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },

    buttonStyle: {
        marginTop: '10%',
    }
})