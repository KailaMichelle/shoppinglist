import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
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
        return [{id: 5, text: item}, ...prevItems];
      });
    }
  }

  return(
    <View style={styles.container}>
    <Header title='Shopping List'/>
    <AddItem addItem={addItem}/>
    <FlatList data={items} 
    renderItem={({item}) => (
      <ListItem item={item} deleteItem={deleteItem}/>
    )} />
      {/* <Text style={styles.text}>Hello World</Text> */}
      {/* <Image source={{uri: 'https://randomuser.me/api/portraits/women/26.jpg'}}  style={styles.img} /> */}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60,
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