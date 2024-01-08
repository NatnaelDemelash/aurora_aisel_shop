import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);

  // update itemAmount
  useEffect(() => {
    const amount = cart.reduce((acc, currentItem) => {
      return acc + currentItem.amount;
    }, 0);

    setItemAmount(amount);
  }, [cart]);

  // Add item to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };

    // Check an item is already in the cart
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // If cart item is already in the cart
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id == id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // remove cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // remove all cart
  const clearCart = () => {
    setCart([]);
  };

  // increase item amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    addToCart(cartItem, id);
  };

  // decrease item amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id == id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        itemAmount,
        addToCart,
        removeFromCart,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
