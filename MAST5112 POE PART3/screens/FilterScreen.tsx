import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { menuItems } from '../data/menuData';

export default function FilterScreen({ navigation }: any) {
  const [filteredItems, setFilteredItems] = useState(menuItems);
  const applyFilter = (course: string) => {
    if (course === 'All') setFilteredItems(menuItems);
    else setFilteredItems(menuItems.filter(item => item.course === course));
  };

  return ( //Filter buttons to filter through the different types of courses offered such as the Starters, Specials and the Desserts
    <View style={styles.container}>
      <Text style={styles.header}>List of Dishes</Text>
      <View style={styles.buttonGroup}>
        <Button title="All" color="#4E73DF" onPress={() => applyFilter('All')} />
        <Button title="Starters" color="#FFB84D" onPress={() => applyFilter('Starter')} />
        <Button title="Specials" color="#5DB075" onPress={() => applyFilter('Specials')} />
        <Button title="Desserts" color="#F16D6D" onPress={() => applyFilter('Dessert')} />
      </View>
      <FlatList //To display the items as a list following each other
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
           <Image source={item.image} style={styles.image} />
            <View style={styles.cardInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemCourse}>{item.course}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          </View>
        )}
      />

            <TouchableOpacity //Navigation for the Home screen and the Menu Manager screen via buttons
               style={styles.buttonMenu} 
               onPress={() => navigation.navigate("Menu Manager")}>
              <Text style={styles.buttonText2}>MENU MANAGER</Text>
            </TouchableOpacity>

            <TouchableOpacity 
               style={styles.buttonHome} 
               onPress={() => navigation.navigate("Home")}>
              <Text style={styles.buttonText1}>HOME</Text>
            </TouchableOpacity>
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 20 },
  header: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  buttonGroup: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  card: {
    backgroundColor: '#fff', 
    borderRadius: 12, 
    flexDirection: 'row', 
    alignItems: 'center',
    marginVertical: 8, 
    padding: 10, 
    shadowColor: '#000', 
    shadowOpacity: 0.1, 
    shadowRadius: 3, 
    elevation: 2,
  },

  image: { width: 70, height: 70, borderRadius: 10, marginRight: 10 },
  cardInfo: { flex: 1 },
  itemName: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  itemDescription: {fontSize: 15, fontWeight: 'bold', color:'#444' },
  itemCourse: { color: '#777' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#5DB075' 
  },
 buttonHome: { 
 backgroundColor: "#4E73DF",
 paddingVertical: 12, 
 borderRadius: 30, 
 marginVertical: 5 
 },

 buttonText1: { 
  color: "#fff", 
  textAlign: "center", 
  fontWeight: "bold", 
  fontSize: 16 
 },
 buttonMenu: { 
 backgroundColor: "#5DB075",
 paddingVertical: 12, 
 borderRadius: 30, 
 marginVertical: 5 
 },

 buttonText2: { 
  color: "#fff", 
  textAlign: "center", 
  fontWeight: "bold", 
  fontSize: 16 
 },

});
