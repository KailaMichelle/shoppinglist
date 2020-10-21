import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem, editItem}) => {
    const[text, setText] = useState('');
    const [isEditing, setEdit] = useState(false);

    const handleEdit = (text) => {
        editItem(item, text);
        setText('');
        setEdit(false);
    }

  return(
    <TouchableOpacity style={styles.listItem}>
    <View style={styles.listItemView}>
        <Icon name="checkbox" size={20} style={styles.btn} color="firebrick" />
        {isEditing
            ? <TextInput placeholder={item.text} value={text} onChangeText={setText} style={styles.listItemText}/>
            : <Text style={styles.listItemText}>{item.text}</Text>
        }
        {isEditing
            ? <Icon name="save" size={20} style={styles.btn} color="black" onPress={() => handleEdit(text)} />
            : <Icon name="edit" size={20} style={styles.btn} color="black" onPress={() => setEdit(true)}/>
        }
        <Icon name="remove" size={20} style={styles.btn} color="firebrick" onPress={() => deleteItem(item.id)}/>
    </View>
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        paddingLeft: 20,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemText: {
        fontSize: 18,
        flex: 1,
    },
    btn: {
        padding: 10,
    }
})

export default ListItem;