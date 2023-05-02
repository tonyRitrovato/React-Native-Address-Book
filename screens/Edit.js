import { StyleSheet, ScrollView, TextInput, View, Alert} from 'react-native';
import { Button } from '@rneui/themed';
import DatePicker from 'react-native-modern-datepicker';
import {Singleton} from '../utils/Singleton';
import {FileHandler} from '../utils/FileHandler';
import { useState } from 'react';

export default function Edit({ route, navigation }) {

    const User = route.params;

    let s = new Singleton();
    let file = new FileHandler();

    const [name, setName] = useState(User.name);
    const [surname, setSurname] = useState(User.surname);
    const [address, setAddress] = useState(User.address);
    const [number, setNumber] = useState(User.number);
    const [date, setDate] = useState(User.date);
    return(
        <ScrollView style = {styles.globalView}>
            <View style = {styles.header}>
                <Button
                    title = {"Salva"}
                    onPress = {() => {
                        const array = s.getAddressList();
                        if(name == '' | surname == '' | address == '' | number == ''| date == '') 
                            Alert.alert("completa tutti i campi!");
                        else {
                            const index = array.findIndex(obj => obj.id === User.id);
                            array[index].name = name;
                            array[index].surname = surname;
                            array[index].address = address;
                            array[index].number = number;
                            array[index].date = date;
                            file.save(s.getAddressList()).then(() => console.log("modifica avvenuta con successo")).catch((err) => console.log(err));
                            const update = s.getAddressRender();
                            update.update();
                            navigation.navigate('Rubrica');
                        }

                    }}
                    titleStyle = {styles.textStyle}
                    type = "clear"
                    color = '#fff'
                    buttonStyle = {styles.buttonStyle}
                />
                <Button
                    title = {"Elimina"}
                    onPress = {() => {
                        const array = s.getAddressList();
                        const filter = array.filter(obj => obj.id !== User.id);
                        s.setAddressList(filter);
                        file.save(filter).then(() => console.log("eliminazione avvenuta con successo")).catch((err) => console.log(err));
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
                <TextInput value={name} onChangeText={setName} style = {styles.formInput} placeholder='Nome'/>
                <TextInput value={surname} onChangeText={setSurname} style = {styles.formInput} placeholder='Cognome'/>
                <TextInput value={address} onChangeText={setAddress} style = {styles.formInput} placeholder='Indirizzo'/>
                <TextInput value={number} onChangeText={setNumber} style = {styles.formInput} keyboardType='numeric' placeholder='Numero Telefonico'/>
                <DatePicker value={date} onSelectedChange = {setDate} style = {styles.dateInput}/>
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
});