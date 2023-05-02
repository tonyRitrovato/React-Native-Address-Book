import { StyleSheet, ScrollView, TextInput, View, Alert} from 'react-native';
import { Button } from '@rneui/themed';
import DatePicker from 'react-native-modern-datepicker';
import {Singleton} from '../utils/Singleton';
import {FileHandler} from '../utils/FileHandler';
import AddressBookitem from '../components/AddressBookItem';
import { useState } from 'react';

export default function Add({navigation}) {

    let s = new Singleton();
    let file = new FileHandler();

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');

    const idGeneration = () => {
        let id = "";
        let max = 9;
        let min = 0;
        do
            for(let i = 0; i < 10; i++)
                id += Math.floor(Math.random() * (max - min + 1)) + min;
        while(idCheck(id));
        return id;
    }

    const idCheck = (id) => {
        s.getAddressList().forEach(element => {
            if(element.id === id)
                return true;
            return false;
        });
    }

    return(
        <ScrollView style = {styles.globalView}>
            <View style = {styles.header}>
                <Button
                    title = {"aggiungi ai contatti"}
                    onPress = {() => {
                        let addresses = s.getAddressList();
                        if(name == '' | surname == '' | address == '' | number == ''| date == '') 
                            Alert.alert("completa tutti i campi!");
                        else {
                            addresses.push(new AddressBookitem(idGeneration(),name, surname, address, number, date));
                            Alert.alert("contatto aggiunto con successo!");
                        }
                        file.save(s.getAddressList()).then(() => console.log("salvataggio avvenuto con successo")).catch((err) => console.log(err));
                        const update = s.getAddressRender();
                        update.update();
                        navigation.navigate('Rubrica');
                    }}
                    titleStyle = {styles.textStyle}
                    type = "clear"
                    color = '#fff'
                    buttonStyle = {styles.buttonStyle}
                />
            </View>
            <View style = {styles.form}>
                <TextInput onChangeText={setName} style = {styles.formInput} placeholder='Nome'/>
                <TextInput onChangeText={setSurname} style = {styles.formInput} placeholder='Cognome'/>
                <TextInput onChangeText={setAddress} style = {styles.formInput} placeholder='Indirizzo'/>
                <TextInput onChangeText={setNumber} style = {styles.formInput} keyboardType='numeric' placeholder='Numero Telefonico'/>
                <DatePicker onSelectedChange = {setDate} style = {styles.dateInput}/>
            </View>
        </ScrollView>
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
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 1,
        width: '100%',
        height: 50,
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