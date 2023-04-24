import { StyleSheet, Text, TextInput, ScrollView, View} from 'react-native';
import {Component} from 'react';
import { Button } from '@rneui/themed';

const letters = [];
for(let i = 65; i <= 90; i++)
    letters.push(String.fromCharCode(i));


export default class LetterIndex extends Component {

    render(){
        return(
                letters.map((letters, index) =>{
                return(
                    <View style = {styles.buttonView}>
                        <Button
                            title = {letters}
                            key = {index}
                            onPress = {() => {}}
                            titleStyle = {styles.textStyle}
                            type = "clear"
                            color = '#fff'
                            buttonStyle = {styles.buttonStyle}
                        />
                    </View>
            )})
        );
    }
}

const styles = StyleSheet.create({

    buttonView: {
        flex: 1,
        width: '70%',
        height: 7,
        marginLeft: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonStyle: {
        height: 30,
    },

    textStyle: {
        fontSize: 10,
        color: 'black'
    }
});