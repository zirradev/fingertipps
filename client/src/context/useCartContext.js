import React from "react";

const CartContext = React.createContext({
  cart: [],
  quantity: 0,
  total: 0,
  updateCartContext: () => null,
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = React.useState([]);
  const [quantity, setQuantity] = React.useState(0);
  const [total, setTotal] = React.useState(0);

  const updateCartContext = React.useCallback((data) => {}, []);

  return (
    <CartContext.Provider value={(cart, quantity, total, updateCartContext)}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => React.useContext(CartContext);
