# MAST5112-POE-PART3
Project Description
This is a mobile restaurant menu app built with React Native and Expo. 
It allows a chef to manage the menu of the day, and allows customers to view the dishes available.

The app was created for the MAST5112 POE Part 3.

## Features
- Splash Screen that shows for 2.5 seconds before going to the Home screen
- Home Screen that shows the number of dishes for each course
- Dish List Screen with filter buttons for All Courses, Starters, Specials and Desserts
- Menu Manager Screen for the chef to add and remove dishes
- Info cards that show the dish name, description, type of dish, price and image
- Header on every screen showing the logo and restaurant name

## Screens
1. *Splash Screen* - Shows the logo for 2.5 seconds
2. *Home Screen* - Shows Starters 4, Main Course 4, Desserts 4, Dish List, Menu Manager and Menu at a Glance. Shows the message "No menu items yet. The chef must add them" if no dishes have been added.
3. *Dish List Screen* - Shows all dishes with filter tags and pills. All Courses = Blue, Starters = Orange, Specials = Green, Desserts = Red.
4. *Menu Manager Screen* - Has text boxes for the chef to enter dish details, an "Add Dish" button to add a dish and a "Remove" button to remove a dish.

## Changes Made in Part 3
- Added Splash Screen using SplashScreen.tsx
- Removed Checkout and Dish Details screens
- Added Menu Manager screen
- Changed filter from a drop-down menu to tags and pills
- Added images to dishes to improve the user experience
- Removed add buttons next to dish names
- Added a header to each screen
