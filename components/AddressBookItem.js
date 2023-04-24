import { StyleSheet, Text, TextInput, ScrollView, View, TouchableHighlight} from 'react-native';
import {Component} from 'react';

export default class AddressBookitem {
    
    constructor(name, surname, address, number, date) {
        this.name = name;
        this.surname = surname;
        this.address = address;
        this.number = number;
        this.date = date
    }
}