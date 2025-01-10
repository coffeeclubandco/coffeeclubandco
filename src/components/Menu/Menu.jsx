import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Espresso', description: 'Rich and bold coffee.', price: '$3.00', category: 'Hot Drinks' },
    { id: 2, name: 'Latte', description: 'Creamy milk with espresso.', price: '$4.00', category: 'Hot Drinks' },
    { id: 3, name: 'Croissant', description: 'Buttery and flaky pastry.', price: '$2.50', category: 'Snacks' },
    { id: 4, name: 'Iced Coffee', description: 'Cold brewed coffee with ice.', price: '$3.50', category: 'Cold Drinks' },
    { id: 5, name: 'Matcha Latte', description: 'Green tea with milk.', price: '$4.50', category: 'Hot Drinks' },
    { id: 6, name: 'Mango Smoothie', description: 'Fresh mango blended to perfection.', price: '$5.00', category: 'Juices' },
    { id: 7, name: 'Strawberry Refresher', description: 'Cool and refreshing drink.', price: '$4.50', category: 'Refreshers' },
    { id: 8, name: 'Sparkling Water', description: 'Bubbly and hydrating.', price: '$2.00', category: 'Water' },
    { id: 9, name: 'Lemonade', description: 'Freshly squeezed lemonade.', price: '$3.00', category: 'Juices' },
    { id: 10, name: 'Hot Chocolate', description: 'Warm and sweet cocoa drink.', price: '$3.50', category: 'Hot Drinks' },
  ];

  const foodItems = [
    { id: 1, name: 'Avocado Toast', description: 'Fresh avocado on toasted bread.', price: '$5.00' },
    { id: 2, name: 'Bagel with Cream Cheese', description: 'Classic bagel with creamy cheese.', price: '$3.50' },
    { id: 3, name: 'Breakfast Burrito', description: 'Egg, cheese, and veggies wrapped in a tortilla.', price: '$6.50' },
    { id: 4, name: 'Caesar Salad', description: 'Crispy lettuce with Caesar dressing.', price: '$7.00' },
    { id: 5, name: 'Turkey Sandwich', description: 'Turkey slices with fresh veggies and bread.', price: '$8.00' },
    { id: 6, name: 'Chicken Wrap', description: 'Grilled chicken in a soft tortilla.', price: '$7.50' },
    { id: 7, name: 'Quiche', description: 'Savory pastry filled with eggs and cheese.', price: '$6.00' },
    { id: 8, name: 'Muffin', description: 'Freshly baked muffin.', price: '$2.50' },
    { id: 9, name: 'Pancakes', description: 'Stack of fluffy pancakes with syrup.', price: '$6.00' },
    { id: 10, name: 'Soup of the Day', description: 'Ask for today’s special soup.', price: '$4.50' },
  ];

  return (
    <><div className="menu">
      <h2 className="menu-title" data-qa="beverages">Beverages</h2>
      <ul className="menu-list">
        {menuItems.map((item) => (
          <li className="menu-item" key={item.id}>
            <div className="menu-item-content">
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
              <p className="menu-item-price">{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
    <div className="menu">
        <div className="menu-category">
          <h3 className="menu-category-title" data-qa="food">Food</h3>
          <ul className="menu-list">
            {foodItems.map((item) => (
              <li className="menu-item" key={item.id}>
                <div className="menu-item-content">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <p className="menu-item-description">{item.description}</p>
                  <p className="menu-item-price">{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div></>

    
  );
};

export default Menu;