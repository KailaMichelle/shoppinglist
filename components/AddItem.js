import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace';

const AddItem = ({title, addItem}) => {
    let [text, setText] = useState('');

    const onChange = (textValue) => setText(textValue);

    // const onSubmit = () => {
    //     text = 'Add Item..'
        
    // }
    
    return(
    <View> 
        <TextInput placeholder={text} style={styles.input} onChangeText={onChange} clearButtonMode="always"/>
        <TouchableOpacity style={styles.btn} onPress={() => 
        // {
            addItem(text)
            // onSubmit();}
        }>
        <Text style={styles.btnText}><Icon name="plus" size={20}/> Add Item</Text>
        </TouchableOpacity>
    </View>
    )
};


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        paddingLeft: 20,
        fontSize: 16,
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        height: 100,
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        paddingTop: 10,
        textAlign: 'center',
    },
})

export default AddItem;