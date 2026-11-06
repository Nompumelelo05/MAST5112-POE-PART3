import React, { useContext, useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MenuContext } from '../context/MenuContext';

export default function HomeScreen({ navigation }: any) {
  const { menuItems } = useContext(MenuContext);
  const [averages, setAverages] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    calculateAverages();
  }, [menuItems]);

  const calculateAverages = () => {
    const grouped: { [key: string]: number[] } = {};
    menuItems.forEach(item => {
      if (!grouped[item.course]) grouped[item.course] = [];
      grouped[item.course].push(item.price);
    });
    const avg: { [key: string]: number } = {};
    Object.keys(grouped).forEach(course => {
      const total = grouped[course].reduce((a, b) => a + b, 0);
      avg[course] = total / grouped[course].length;
    });
    setAverages(avg);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header1}>Home</Text>
      <Text style={styles.header2}>Today's Menu</Text>
      
      {menuItems.length === 0 ? (
        <Text style={styles.emptyText}>No menu items yet. The chef must add them first.</Text>
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
            </View>
          )}
        />
      )}

      {menuItems.length > 0 && ( //Display the average cost of each course depending on how many dishes of the same type are chosen or different courses
        <> 
          <Text style={styles.subtitle}>Average Prices</Text>
          {Object.keys(averages).map(course => (
            <Text key={course} style={styles.averageText}>
              {course}: R{averages[course].toFixed(2)}
            </Text>
          ))}
        </>
      )}

      
      <TouchableOpacity //Navigation for the Dish List Screen and the Menu Manager screen via buttons
         style={styles.buttonDish} 
         onPress={() => navigation.navigate("Dish List")}>
        <Text style={styles.buttonText1}>DISH LIST</Text>
      </TouchableOpacity>

      <TouchableOpacity 
         style={styles.buttonMenu} 
         onPress={() => navigation.navigate("Menu Manager")}>
        <Text style={styles.buttonText2}>MENU MANAGER</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA', padding: 20 },
  header1: { fontSize: 33, fontWeight: 'bold', color: '#333', marginBottom: 10 },
  header2: { fontSize: 24, fontWeight: 'bold', color: '#5DB075', marginBottom: 10 },
  emptyText: { fontSize: 16, color: '#888', textAlign: 'center', marginTop: 40 },
  subtitle: { marginTop: 15, fontSize: 18, fontWeight: 'bold', color: '#444' },
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
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#5DB075' },
  averageText: { fontSize: 16, color: '#555' },
  buttonGroup: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 
  },

 buttonDish: { 
 backgroundColor: "#FFA500",
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
