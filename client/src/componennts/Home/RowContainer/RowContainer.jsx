import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../../context/StateProvider";
import { actionType } from "../../../context/reducer";

export default function RowContainer({
  flag,
  data,
  scrollValue,
  gridORlist = true,
  onDataLengthChange,
}) {
  const rowContainer = useRef();
  const [quantity, setQuantity] = useState(1);
  const [updatedItem, setUpdatedItem] = useState([]);
  const [{ cartItems }, dispatch] = useStateValue();
  const navigate = useNavigate();


  const cartDispatch = () => {
    // localStorage.setItem("cartItems", JSON.string(updatedItem));
    localStorage.removeItem("cartItems");
    localStorage.setItem("cartItems", JSON.stringify(updatedItem));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: updatedItem,
    });
  };

  /**
   * The function `addToCart` adds an item to the cart and updates the quantity if the item is already
   * in the cart.
   */
  let flg = true;
  const addtoCart = (item) => {
    // console.log(item.id);
    // cartItems.map((f) => {
    //   if (f.id === item.id) {
    //     cartDispatch();
    //     console.log("yooh");
    //     return
    //   }
    // });
    if (item.cartORadd === "cart") {
      item.cartORadd = "add";

      cartItems.map((f) => {
        if (f.id === item.id) {
          const num = parseFloat(f.quantity);
          f.quantity = num + 1;
          cartDispatch();
          flg = false;
          return;
        } else {
        }
      });

      if (flg) {
        dispatch({
          type: actionType.SET_CART_ITEMS,
          cartItems: [...cartItems, item],
        });
        localStorage.setItem("cartItems", JSON.stringify([...cartItems, item]));
      }
    } else if (item.cartORadd === "add") {
      setQuantity(quantity + 1);
      cartItems.map((f) => {
        if (f.id === item.id) {
          const num = parseFloat(f.quantity);
          f.quantity = num + 1;
         
        } else {
          
        }
      });
      cartDispatch();
    }
    // localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };
  useEffect(() => {
    setUpdatedItem(cartItems);
   
    if (onDataLengthChange) {
      onDataLengthChange(data.length); // Call the callback to update length in parent
    }
  }, [cartItems, data, onDataLengthChange]);

  const stopEventPropagationTry = (event) => {
    if (event.target != event.currentTarget) {
      event.stopPropagation();
    }
  };

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  const spring = {
    type: "spring",
    damping: 10,
    stiffness: 100
  }
  return (
    <div>
      {/* laptop view */}
      <div
        ref={rowContainer}
        className={`w-full h-full hidden md:flex  items-center my-10 p-5 gap-6 md:gap-7 p-1 scroll-smooth ${
          flag
            ? "overflow-x-scroll scrollbar-none scroll-auto"
            : "overflow-x-hidden flex flex-wrap justify-center"
        } ${gridORlist ? null : "flex-col p-5 w-full"}`}
      >
        {data &&
          data.map((item) => (
            <div
              key={item?.id}
              onClick={() => navigate(`/singlefood/${item?.id}`)}
              className={`${
                gridORlist
                  ? "w-1/2  md:w-1/4 lg:w-1/4 xl:w-1/5 "
                  : "flex-col w-full"
              } ${
                flag ? "min-w-[820px]" : "min-w-[220px]"
              } h-auto bg-gray-10 border  bl rounded-lg p-4 my-6 backdrop-blur-lg hover:drop-shadow-2xl`}
            >
              {/* <NavLink to={`/singlefood/${item?.id}`}> */}
              <div className={`${
                flag ? "flex flex-row items-start justify-around gap-5" : "flex flex-col"
              }`}>
              <div className={`flex items-center justify-center bg-red-00 w-ful`}>
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{spring}}
                  src={item?.images}
                  alt=""
                  className={`w-48 h-48 z-20 ${
                    flag ? "rounded-blob-2" : "rounded-blob-1"
                  }  -mt-7 drop-shadow-2xl`}
                />
                <div className='w-1/2  bg-red-00 flex items-center justify-end absolute z-10 -mt-28 ml-14 '>
              <div className={`w-36 h-36 rounded-blob-1 bg-blob-color3 rotate-45 ${flag ? "mr-20" : "ml-5"}`}>

              </div>
            </div>
                <div className='w-1/2  bg-red-30 flex items- justify- absolute z-10 mt-[6rem]'>
              <div className={`w-14 h-14 rounded-blob-1 bg-blob-color4 rotate-45 ${flag ? "ml-[5.5rem]" : "-ml-2"}`}>

              </div>
            </div>
              </div>
              <div>
              <div className="flex flex-col items-start justify-between w-full">
                <p className="text-base font-semibold text-textColor md:text-lg">
                  ratings
                </p>
                <p className={`text-base font-semibold text-textColor ${
                flag ? "text-md" : "md:text-lg"
              }`}>
                  {item?.item_name}
                </p>
              </div>
              <div className="flex items-center flex-row justify-between gap-8 mt-5">
                <p className={`text-base font-semibold text-textColor ${
                flag ? "text-md" : "md:text-lg"
              }`}>
                  <span className="text-sm text-red-500">$</span>{item?.price}
                </p>
                <motion.div
                  whileTap={{ scale: 1.2 }}
                  className="flex items-center justify-center w-12 h-12 text-2xl bg-blob-color5 rounded-full cursor-pointer hover:shadow-md"
                  onClick={(e) => {
                    stopEventPropagationTry(e); // Prevent event from propagating
                    addtoCart(item);
                  }}
                >
                  {item?.cartORadd === "cart" ? (
                    <MdShoppingBasket className="text-white" />
                  ) : (
                    <BsCartPlusFill className="text-white" />
                  )}
                </motion.div>
              </div>
              </div>
              </div>
              {/* </NavLink> */}
            </div>
          ))}
      </div>

      {/* mobile view */}
      <div
        ref={rowContainer}
        className={`w-full flex md:hidden  items-center my-16 gap-6 md:gap-7  scroll-smooth ${
          flag
            ? "overflow-x-scroll scrollbar-none"
            : "overflow-x-hidden flex flex-wrap justify-center"
        } ${gridORlist ? null : "flex-col"}`}
      >
        {data &&
          data.map((item) => (
            <div
              key={item?.id}
              onClick={() => navigate(`/singlefood/${item?.id}`)}
              className={`${
                gridORlist
                  ? "w-40  md:w-1/3 lg:w-1/4 xl:w-1/5 "
                  : "flex-col w-96"
              } ${
                flag ? "min-w-[200px]" : "min-w-[120px]"
              }  h-auto bg-gray-100 bl rounded-lg p-4 my-7 backdrop-blur-lg hover:drop-shadow-2xl`}
            >
              {/* <NavLink to={`/singlefood/${item?.id}`}> */}
              <div className="flex items-center justify-center w-full">
                <motion.img
                  whileHover={{ scale: 1.2 }}
                  src={item?.images}
                  alt=""
                  className={`w-full ${
                    gridORlist ? "h-32" : "h-full"
                  } rounded-xl  -mt-8 drop-shadow-2xl`}
                />
              </div>
              <div className="flex flex-col items-start justify-between w-full">
                <p className="text-base font-semibold text-textColor md:text-lg">
                  ratings
                </p>
                <p className="text-base font-semibold text-textColor md:text-lg">
                  {item?.item_name}
                </p>
              </div>
              <div className="flex items-center flex-row justify-between gap-8">
                <p className="text-lg font-semibold text-headingColor">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
                <motion.div
                  whileTap={{ scale: 1.2 }}
                  className="flex items-center justify-center w-8 h-8 text-2xl bg-red-600 rounded-full cursor-pointer hover:shadow-md"
                  onClick={(e) => {
                    stopEventPropagationTry(e); // Prevent event from propagating
                    addtoCart(item);
                  }}
                >
                  {item?.cartORadd === "cart" ? (
                    <MdShoppingBasket className="text-white" />
                  ) : (
                    <BsCartPlusFill className="text-white" />
                  )}
                </motion.div>
              </div>
              {/* </NavLink> */}
            </div>
          ))}
      </div>
    </div>
  );
}