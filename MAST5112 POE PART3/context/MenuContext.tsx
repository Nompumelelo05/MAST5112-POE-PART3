import React, { createContext, useState, ReactNode } from 'react';
import { MenuItem } from '../data/menuData';

interface MenuContextType {
  menuItems: MenuItem[];
  addItem: (item: MenuItem) => void;
  removeItem: (id: number) => void;
}

export const MenuContext = createContext<MenuContextType>({
  menuItems: [],
  addItem: () => {},
  removeItem: () => {},
});
//Allows for the Menu Manager screen to add and remove menu items and also helps with the filter buttons in the Dish list Screen
export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  const addItem = (item: MenuItem) => {
    setMenuItems(prev => [...prev, item]);
  };

  const removeItem = (id: number) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  return (
    <MenuContext.Provider value={{ menuItems, addItem, removeItem }}>
      {children}
    </MenuContext.Provider>
  );
};
