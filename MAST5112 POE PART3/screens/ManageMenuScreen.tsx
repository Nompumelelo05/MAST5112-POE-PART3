import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { MenuContext } from '../context/MenuContext';
import { MenuItem } from '../data/menuData';

export default function ManageMenuScreen({ navigation }: any) {
  const { menuItems, addItem, removeItem } = useContext(MenuContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');

  // Function to return matching dish image with the dish name
  const getDishImage = (name: string) => {
    switch (name.trim().toLowerCase()) {
      case 'garlic bread':
        return require('../img/garlic-bread.jpg');
      case 'steak':
        return require('../img/steak.jpg');
      case 'ice cream':
        return require('../img/ice-cream.jpg');
      case 'mozzarella sticks':
        return require('../img/mozzarella-sticks.jpg');
      case 'beef wellington':
        return require('../img/beef-wellington.jpg');
      case 'red velvet cheesecake':
        return require('../img/red-velvet-cheesecake.jpg');
      case 'prawn cocktail':
        return require('../img/prawn-cocktail.jpg');
      case 'braised chicken legs with fennel':
        return require('../img/braised-chicken.jpg');
      case 'pistachio cake':
        return require('../img/pistachio-cake.jpg');
      case 'deviled eggs':
        return require('../img/deviled-eggs.jpg');
      case 'grilled pizza':
        return require('../img/grilled-pizza.jpg');
      case 'affogato':
        return require('../img/affogato.jpg');
      case 'cream mushroom soup':
        return require('../img/cream-mushroom-soup.jpg');
      case 'double stack mushroom chicken cheeseburger':
        return require('../img/chicken-cheeseburger.jpg');
      case 'mini pavlovas':
        return require('../img/mini-pavlova.jpg');
      default:
        return require('../img/placeholder.jpg');
    }
  };

  // Add new menu items by entering the name, description, price and the type of course it is
  const handleAdd = () => {
    if (name && price && course && description) {
      const newItem: MenuItem = {
        id: Date.now(),
        name,
        description,
        price: parseFloat(price),
        course,
        image: getDishImage(name),
      };
      addItem(newItem);
      setName('');
      setDescription('');
      setPrice('');
      setCourse('');
    }
  };
  //Text inputs for the chef to enter the details of the dish they want to add to the menu for the day
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Manage Menu</Text>

      <TextInput
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />

      <TextInput
        placeholder="Price (e.g. 35)"
        value={price}
        onChangeText={setPrice}
        style={styles.input}
        keyboardType="numeric"
      />

      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={[styles.input, styles.descriptionInput]}
        multiline
      />

      <TextInput
        placeholder="Course (Starter/Specials/Desserts)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />
     
      <Button title="Add Dish" color="#5DB075" onPress={handleAdd} />

      {menuItems.length === 0 ? (
        <Text style={styles.emptyText}>No items added yet.</Text>
      ) : (
        <FlatList
          data={menuItems}
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
              <Button
                title="Remove"
                color="#E74C3C"
                onPress={() => removeItem(item.id)}
              />
            </View>
          )}
        />
      )}

      <TouchableOpacity //Navigation for the Dish List Screen and the Home Screen via buttons
        style={styles.buttonMenu}
        onPress={() => navigation.navigate('Dish List')}>
        <Text style={styles.buttonText2}>DISH LIST</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonHome}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText1}>HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 20 },
  header: { fontSize: 26, fontWeight: 'bold', color: '#333', marginBottom: 10 },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 8,
    backgroundColor: '#fff',
  },

  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    minHeight: 60,
    textAlignVertical: 'top',
  },

  emptyText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 30,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
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
  itemDescription: { fontSize: 15, fontWeight: 'bold', color: '#444' },
  itemCourse: { color: '#777', marginBottom: 2 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#5DB075' },

  buttonHome: {
    backgroundColor: '#4E73DF',
    paddingVertical: 12,
    borderRadius: 30,
    marginVertical: 5,
  },
  buttonText1: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonMenu: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    borderRadius: 30,
    marginVertical: 5,
  },
  buttonText2: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
