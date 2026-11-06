//export these menu items to the different screens such at the Home screen, Dish List screen and the Menu manager screen
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  course: string;
  description: string;
  image:any
}

//The different menu offered by Christoffel ranging from Starters, Specials and Desserts.
export const menuItems: MenuItem[] = [
  { id: 1, name: "Garlic Bread", price: 35, course: "Starter", description: "Bread topped with butter and garlic", image: require('../img/garlic-bread.jpg')},
  { id: 2, name: "Steak", price: 120, course: "Specials", description: "Beef cooked by preference", image: require('../img/steak.jpg')},
  { id: 3, name: "Ice Cream", price: 45, course: "Dessert", description: "Tinroof topped with chocolate sauce", image: require('../img/ice-cream.jpg')},
  { id: 4, name: "Mozzarella sticks", price: 25, course: "Starter", description: "Fried cheeseticks", image: require('../img/mozzarella-sticks.jpg')},
  { id: 5, name: "Beef Wellington", price: 250, course: "Specials", description: "Baked steak wrapped in shortcrust", image: require('../img/beef-wellington.jpg')},
  { id: 6, name: "Red Velvet Cheesecake", price: 150, course: "Dessert", description: "Cake layered with red velvet and cheesecake", image: require('../img/red-velvet-cheesecake.jpg')},
  { id: 7, name: "Prawn Cocktail", price: 85, course: "Starter", description: "Prawns dipped in cocktail sauce", image: require('../img/prawn-cocktail.jpg')},
  { id: 8, name: "Braised Chicken Legs with Fennel", price: 175, course: "Specials", description: "Golden chicken with saute sliced fennel", image: require('../img/braised-chicken.jpg')},
  { id: 9, name: "Pistachio cake", price: 150, course: "Dessert", description: "Soft, moist cake tooped with pistachio and cream", image: require('../img/pistachio-cake.jpg')},
  { id: 10, name: "Deviled eggs", price: 50, course: "Starter", description: "Cream filled boiled egg", image: require('../img/deviled-eggs.jpg')},
  { id: 11, name: "Grilled Pizza", price: 150, course: "Specials", description: "Pizza made Italian-style", image: require('../img/grilled-pizza.jpg')},
  { id: 12, name: "Affogato", price: 110, course: "Dessert", description: "Gelato topped with espresso", image: require('../img/affogato.jpg')},
  { id: 13, name: "Cream Mushroom Soup", price: 75, course: "Starter", description: "Creamy mushroom soup", image: require('../img/cream-mushroom-soup.jpg')},
  { id: 14, name: "Double Stack Mushroom Chicken Cheeseburger", price: 90, course: "Specials", description: "Grilled chicken burger", image: require('../img/chicken-cheeseburger.jpg')},
  { id: 15, name: "Mini Pavlovas", price: 100, course: "Dessert", description: "Fluffy crisp meringue shell topped with strawberries", image: require('../img/mini-pavlova.jpg')},
];
