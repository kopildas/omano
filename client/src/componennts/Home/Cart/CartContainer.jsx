import { motion } from "framer-motion";
import React, { useState } from "react";
// import { useStateValue } from "../../context/StateProvider";
// import { actionType } from "../../context/reducer";
// import CartitemComponenet from "./CartitemComponenet";
import { useStateValue } from "../../../context/StateProvider";
import { actionType } from "../../../context/reducer";
import CartitemComponenet from "./CartitemComponenet";

export default function CartContainer() {
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  const [total, setTotal] = useState(0);

  const setiingTotal = (data) => {
    setTotal(data);
  };

  function cartShowing() {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-80 h-screen bg-black drop-shadow-md flex flex-col z-[101]"
    >
      <div
        className="w-full flex items-center justify-center p-4 cursor-pointer"
        onClick={cartShowing}
      >
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="flex-1 items-start justify-start text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="md:h-8 md:w-8 w-16 h-16"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </motion.div>

        <p className="text-white md:text-lg text-4xl mr-16 md:mr-10 font-semibold flex-1 items-start justify-start">
          Cart
        </p>

        {/* <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-base text-gray-600"
        >
          Clear <RiRefreshFill />
        </motion.p> */}
      </div>

      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full mt-10 md:mt-1 bg-slate-900 rounded-t-[2rem] flex flex-col">
          {/* cart section */}
          <div className="w-full h-96 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart items */}
            {cartItems &&
              cartItems.map((item) => (
                <CartitemComponenet
                  key={item.id}
                  item={item}
                  setiingTotal={setiingTotal}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full flex-1 bg-gray-700 mt-32 md:-mt-16 rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
            <div className="bg-gray-500  backdrop-blur-2xl text-white p-5 md:p-2 md:mt-5 rounded-lg w-full">
              <div className="flex flex-col items-center justify-center gap-5 text-2xl md:gap-1 md:text-base">
                <div className="w-full flex items-center justify-between">
                  <p className="">Sub Total</p>
                  <p className="">$ {total}</p>
                </div>
                <div className="w-full flex items-center justify-between">
                  <p className="">Delivery</p>
                  <p className="">$ 77</p>
                </div>

                <div className="w-full border-b border-gray-600"></div>

                <div className="w-full flex items-center justify-between">
                  <p className="md:text-2xl text-3xl">Total</p>
                  <p className="md:text-2xl text-3xl text-red-300">
                    $ {total + 77}
                  </p>
                </div>
              </div>
            </div>
            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full h-20 text-3xl md:text-lg md:h-10 rounded-full bg-orange-500 text-gray-50  hover:shadow-lg "
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full h-20 text-3xl md:text-lg md:h-10 rounded-full bg-orange-500 text-gray-50 my-2 hover:shadow-lg "
              >
                Login to Check Out
              </motion.button>
              // {popups.login && pagestate === "Log in" && (
              //   <Login toggle={calllog} />
              // )}
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
          <p className="text-gray-600 text-lg">Add some items to your cart.</p>
        </div>
      )}
    </motion.div>
  );
}