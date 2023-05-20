import {createContext,useState} from "react"
import { mealData } from "../Screens/Store1"

export const AppContext = createContext(null)

const AppContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [isCart, setIsCart] = useState(false);
     //Get the total Amount in cart function
     const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < mealData.length + 1; i++) {
          cart[i] = 0;
        }
        return cart;
      };
    
    const [cartItems, setCartItems] = useState(getDefaultCart());


// Cart Functions
    
  
  //Increment items in cart function
  const addItems = (itemId) => {
    return setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Decrement items from cart and Remove items from cart function

  const removeItems = (itemId) => {
    if (cartItems[itemId] < 1) {
      let filteredItem = cart.filter((value) => {
        return value.id !== itemId;
      });
      return setCart([...filteredItem]);
    } else {
      return setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

//Increment items in cart function
  const addToCart = (Id) => {
    let filteredItem = mealData.filter((value) => {
      return value.id === Id;
    });
    let itemExist = cart.some((item) => item.id === Id);

    if (!itemExist) {
      return setCart((prev) => [...prev, ...filteredItem]);
    } else {
      return false;
    }
  };

  //Get the total Amount in cart function
  const getTotalCartItems = () => {
    let TotalAmount = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = cart.find((product) => product.id === Number(item));
        TotalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return TotalAmount;
  };


  const contextValues = {
    cart,
    setCart,
    isCart,
    setIsCart,
    getTotalCartItems,
    addToCart,
    removeItems,
    addItems,
    cartItems
    }
    return(
        <AppContext.Provider value={contextValues}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider