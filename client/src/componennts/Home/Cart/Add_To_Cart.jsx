import React, { useEffect, useState } from 'react'
import { actionType } from '../../../context/reducer';
import { toast } from 'react-toastify';
import { useStateValue } from '../../../context/StateProvider';

export default function Add_To_Cart({data,quantity}) {


    const [{foodItem, cartShow, cartItems, user }, dispatch] = useStateValue();
  
    const [cartData, setCartData] = useState(null);

    const cart = () => {
      dispatch({
        type: actionType.SET_CART_ITEMS,
        cartItems: [...cartItems, cartData],
      });
      localStorage.removeItem("cartItems");
      localStorage.setItem("cartItems", JSON.stringify([...cartItems, cartData]));
    };
  
    const addToExistedCart = () => {
      console.log(cartData);
      cartItems.map((f) => {
        if (f.item_id === cartData.item_id) {
          const num = parseFloat(f.quantity);
          f.quantity = num + quantity;
          console.log(f.quantity);
        }
      });
      dispatch({
        type: actionType.SET_CART_ITEMS,
        cartItems: [...cartItems],
      });
      localStorage.removeItem("cartItems");
      localStorage.setItem("cartItems", JSON.stringify([...cartItems]));
    };
  
    // its check is item is already addeed on cart list or not if its listed on cart then it will only update the quantity by calling addToExistedCart this function rather than it will call cart() to update cartItem
    const update = () => {
      let check = true;
      if (cartItems && cartData) {
        cartItems.map((f) => {
          if (f.item_id === cartData.item_id) {
            addToExistedCart();
            check = false;
          }
        });
        if (check) {
          cart();
        }
       
      }
    };
  
    /**
     * The function `addToCart` adds an item to the cart and updates the quantity if the item is already
     * in the cart.
     */
    let flg = true;
  
    const addtoCart = (item) => {
  
        setCartData((prevCartData) => ({
            ...prevCartData,
            _id: item._id || item.item_id,
            item_name: item.item_name,
            sale: item.sale,
            price: item.price,
            category: item.category,
            quantity: quantity,
            cartORadd: "cart",
            SKU: item.SKU,
            images: item.images || item.picture,
            offer: item.offer,
          }));
          foodItem.map((f) => {
            if (f._id === item._id) {
              f.cartORadd = "add";
              return;
            }
          });
          toast.success("Successfully added to the cart.")
    
          localStorage.removeItem("foodItem");
          localStorage.setItem("foodItem", JSON.stringify([...foodItem]));
         
     
  
    };
  
    useEffect(() => {
      // This code will run every time cartData changes
      update();
    }, [cartData]);




  return (
    <button className="bg-blob-color4 w-44 p-3 text-xl text-stone-800  rounded-2xl"
                onClick={(e) => {
                    // stopEventPropagationTry(e); // Prevent event from propagating
                    addtoCart(data);
                  }}>
                  Add To Cart
                </button>
  )
}