import { StyleSheet, Text, TextInput, ScrollView, View} from 'react-native';
import {Component} from 'react';
import { Button } from '@rneui/themed';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'X', 'Y', 'Z'];


export default class LetterIndex extends Component {

    render(){
        return(
                letters.map((letters) =>{
                return(
                    <View style = {styles.buttonView}>
                        <Button
                            title = {letters}
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
        height: '100%',
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