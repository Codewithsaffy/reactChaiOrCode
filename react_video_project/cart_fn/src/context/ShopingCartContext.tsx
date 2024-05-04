import { createContext, useContext, useState } from "react";

// ====================================
//  all types
// ====================================
type ShopingCartContextChildren = {
  children: React.ReactNode;
};

type ShopingCartContextType = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeCartQuantity: (id: number) => void;
  openCart: () => void;
  closeCart: () => void;
  cartItems: CartItem[];
  cartQuantity: number;
};

type CartItem = {
  id: number;
  quantity: number;
};

// =======================================
// make context
const ShopingCartContext = createContext({} as ShopingCartContextType);

// use context

export function useShpopingCartContext() {
  return useContext(ShopingCartContext);
}

// all fn of create context

const [cartItems, setCartItem] = useState<CartItem[]>([]);
const [isCartOpen, setIsCartOpen] = useState(false);
const cartQuantity = cartItems.reduce(
  (quantity, item) => item.quantity + quantity,
  0
);

function getItemQuantity(id: number) {
  return cartItems.find((item) => item.id === id)?.quantity || 0;
}
function increaseCartQuantity(id: number) {
  setCartItem((currItem) => {
    if (currItem.find((item) => item.id === id) == null) {
      return [...currItem, { id, quantity: 1 }];
    } else {
      return currItem.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
  });
}
function decreaseCartQuantity(id: number) {
  setCartItem((currItem) => {
    if (currItem.find((item) => item.id === id)?.quantity === 1) {
      return currItem.filter((item) => item.id !== id);
    } else {
      return currItem.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
  });
}
function removeCartQuantity(id: number) {
  return setCartItem((currItems) => {
    return currItems.filter((item) => item.id !== id);
  });
}

const openCart = () => setIsCartOpen(true);
const closeCart = () => setIsCartOpen(false);

// context provider

export function ShopingCartProvider({ children }: ShopingCartContextChildren) {
  return (
    <ShopingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeCartQuantity,
        openCart,
        closeCart,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShopingCartContext.Provider>
  );
}
