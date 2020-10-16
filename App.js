import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { v1 as uuidv1 } from 'uuid'

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv1(), text: 'Oat Milk'},
    {id: uuidv1(), text: 'Wine'},
    {id: uuidv1(), text: 'Chocolate'},
    {id: uuidv1(), text: 'Cheese'},
  ]);

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = item => {
    if(!item) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    } else {
      setItems(prevItems => {
        return [{id: uuidv1(), text: item}, ...prevItems];
      });
    }
  }

  const editItem = (item, newitem) => {
    if(!newitem){
      Alert.alert('Error', 'Textfield must be filled out', {text: 'Ok'});
    } else {
      let newItems = [...items];
      const index = newItems.findIndex(items => items === item);
      newItems[index] = Object.assign(newItems[index], { text: newitem })
      console.log(newItems)
  
      setItems(newItems);
    }
  }


  return(
    <View style={styles.container}>
    <Header title='Shopping List'/>
    <FlatList data={items} 
    renderItem={({item}) => (
      <ListItem item={item} deleteItem={deleteItem} editItem={editItem}/>
    )} />
    <AddItem addItem={addItem}/>
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/women/26.jpg'}}  style={styles.img} /> */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
    // paddingBottom: 60,
    // justifyContent: 'center', 
    // alignItems:'center'}
  },
  // text: {
  //   color: 'darkslateblue', 
  //   fontSize: 30
  // },
  // img: {
  //   width: 100,
  //   height: 100,
  //   borderRadius: 50,
  // },
})

export default App;