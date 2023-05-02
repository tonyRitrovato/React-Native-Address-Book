import { StyleSheet, Text, View, TouchableHighlight, Alert} from 'react-native';
import {Component } from 'react';
import {Singleton} from '../utils/Singleton';
import {FileHandler} from '../utils/FileHandler';


export default class AddressLetter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addresses: [],
            navigation: this.props.navigation,
        };
        this.file = new FileHandler();
        this.s = new Singleton();
        this.s.setAddressRender(this);
    }

    update() {
        this.setState({addresses: this.s.getAddressList()})
        this.forceUpdate();
    }

    async componentDidMount() {
            await this.file.upload()
            .then((data) => {
                this.s.setAddressList(data);
                const updatedAddresses = this.s.getAddressList().sort((a, b) => a.surname.localeCompare(b.surname));
                this.setState({ addresses: updatedAddresses });
            })
            .catch(err => console.log(err));
           
        }

    render() {
        /* this.file.delete(); */
        const { navigation } = this.props;
       if(this.s.isSearching === true && this.s.getSearch() !== '') {
        result = this.state.addresses.filter(obj => obj.name === this.s.getSearch() | obj.surname === this.s.getSearch())
       }
        else
            result = this.state.addresses;
        return (
            result.map(address => {
                return (
                    <TouchableHighlight key= {address.id} onPress={() => {this.props.navigation.navigate('Modifica', address)}}>
                        <View style={styles.globalView}>
                            <Text style={styles.text}>{address.name} {address.surname}</Text>
                        </View>
                    </TouchableHighlight>
                );
            })
        );
    }
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


