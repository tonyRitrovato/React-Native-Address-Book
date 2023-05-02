import { StyleSheet, View} from 'react-native';
import {Singleton} from '../utils/Singleton';
import {FileHandler} from '../utils/FileHandler';
import { Button } from '@rneui/themed';


export default function LetterIndex() {

    let s = new Singleton();
    let file = new FileHandler();

    const letters = [];
    for(let i = 65; i <= 90; i++)
        letters.push(String.fromCharCode(i));
        letters.push('#');

        return(
                letters.map((letters) =>{
                return(
                    <View key ={letters} style = {styles.buttonView}>
                        <Button
                            title = {letters}
                            onPress = {() => {
                                address = file.upload().then(data => s.setAddressList(data)).catch(err => console.log(err));
                                if(letters !== '#') 
                                    s.setAddressList(s.addressList.filter(obj => obj.name.includes(letters) | obj.surname.includes(letters)));
                                const update = s.getAddressRender();
                                update.update();
                            }}
                            titleStyle = {styles.textStyle}
                            type = "clear"
                            color = '#fff'
                            buttonStyle = {styles.buttonStyle}
                        />
                    </View>
            )})
        );
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