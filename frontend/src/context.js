import React, { createContext, useState } from 'react';

export const Shoppingcontext = createContext(null);

const courseData = [
  {
    name: "Digital Marketing",
    professor: "Mukesh",
    available: "Weekends",
    progress: 70,
    enrolled: true,
  },
  {
    name: "Web Development",
    professor: "John",
    available: "Weekdays",
    progress: 50,
    enrolled: true,
  },
  {
    name: "Data Science",
    professor: "Emily",
    available: "Weekdays",
    progress: 90,
    enrolled: false,
  },
];

function ShopContextProvider(props) {
  const [cartitems, setCartItems] = useState(courseData);

  const contextVal = { cartitems, setCartItems };
  console.log(cartitems);

  return (
    <Shoppingcontext.Provider value={contextVal}>
      {props.children}
    </Shoppingcontext.Provider>
  );
}

export default ShopContextProvider;
