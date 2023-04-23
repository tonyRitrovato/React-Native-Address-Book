import { StyleSheet, Text, TextInput, ScrollView, View} from 'react-native';
import { Button } from '@rneui/themed';
import LetterIndex from '../components/LetterIndex';

export default function List({navigation}) {
        
    const navigateAdd = () => {
        navigation.navigate('Aggiungi');
    }

    return( 
        <View style = {styles.globalView}>
            {/* view ricerca e aggiunta*/}
            <View style = {styles.searchGlobalView}>
                <View style = {styles.search}>
                    <TextInput
                     style = {styles.searchInput}
                     placeholder='Cerca'
                     />
                </View>
                <View style = {styles.add}>
                    <Button
                        title = ""
                        onPress={navigateAdd}
                        color = '#000'
                        type = "clear"
                        icon={{
                            name: 'add',
                            size: 30,
                            color: 'black',
                          }}
                    />
                </View>
            </View>
            {/*Secondo view*/}
            <View style = {styles.addressBookGlobalView}>
                <ScrollView style = {styles.addressView}>
                    {/*scritta contatti*/}
                    <View style = {styles.contactTextView}>
                        <Text style = {styles.contactStyle}>Contatti</Text>
                    </View>
                    {/*component view */}
                    <View style = {styles.componentView}>
                    </View>
                </ScrollView>
                {/*lista delle lettere per muoversi velocemente all' interno della rubbrica */}
                <View style = {styles.letterIndexView}>
                    <LetterIndex/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    globalView: {
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },

    searchGlobalView: {
        width: '100%',
      height: '100%',
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'white',
      alignItems: 'center',
    },

    addressBookGlobalView: {
      width: '100%',
      height: '100%',
      flex: 8,
      flexDirection: 'row',
      backgroundColor: 'white',
    },

    addressView: {
        
        flex: 5.5,
        flexDirection: 'column',
    },

    contactTextView: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        flex: 1,
    },

    letterIndexView: {
        width: '100%',
        height: 300,
        flex: 1,
        position: 'absolute',
        marginTop: '40%',
        marginLeft: 145,
    },

    componentView: {
        width: '100%',
      height: '100%',
        backgroundColor: 'white',
        flex: 8,
    },

    contactStyle: {
        fontSize: 30,
        fontWeight: 'bold', 
        marginLeft: 20,
        marginTop: '3%'
    },

    search: {
        backgroundColor: 'white',
        flex: 5.5,
        padding: 5,
        marginLeft: 15,
    },

    searchInput: {
        backgroundColor: '#eee',
        borderRadius: 200,
        padding: 5,
        width: '85%'
    },

    add: {
        flex: 1,
        backgroundColor: 'white',
        width: '15%',
        position: 'absolute',
        marginLeft: '85%',
    },
});