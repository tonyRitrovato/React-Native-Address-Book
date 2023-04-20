import { StyleSheet, Text, TextInput, View, Button} from 'react-native';

//Prima view: ricerca e aggiunta

export default function List() {
    return( 
        <View>
            {/* view ricerca e aggiunta*/}
            <View>
                <View style = {styles.search}>
                    <TextInput
                     style = {styles.searchInput}
                     placeholder='Cerca'
                     />
                </View>
                <View style = {styles.add}>
                    <Button
                        title = "+"
                        onPress={() => {}}
                        style = {styles.addButton}
                    />
                </View>
            </View>
            {/*altro view da definire con calma*/}
            <View></View>
        </View>
    );
}

const styles = StyleSheet.create({

    globalView: {

    },

    searchGlobalView: {
        width: '100%',
      height: '100%',
      marginBottom: 5,
      padding: 5,
      alignItems: 'center',
      flexDirection: 'row'
    },

    search: {

    },

    searchInput: {
        backgroundColor: 'white',
        borderRadius: 200,
        padding: '3%',
        borderWidth: 1,
        flex: 4,
    },

    add: {

    },

    addButton: {
        backgroundColor: 'white',
        borderRadius: '100%',
        padding: '5%',
        flex: 1,
    },
});