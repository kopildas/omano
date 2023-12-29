import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
// import { useStateValue } from "../../../context/StateProvider";
import axios from "axios";
import { actionType } from "../../../context/reducer";
import { toast } from "react-toastify";
import RowContainer from "../RowContainer/RowContainer";
import Spinner from "../../Spinner";
import Data_Lodder from "../Data_Lodder";
import { useStateValue } from "../../../context/StateProvider";
// import { category } from "../admin_comp/Add_popup";
// import RowContainer from "./RowContainer";

export default function Menu({ flag=true, scrollValue }) {
  const [data, setData] = useState(null);
  const [{ foodItem, cartShow }, dispatch] = useStateValue();
  async function fetchingData() {
  
      try {
        // dispatch({
        //   type: actionType.UPDATE_PRODUCTS,
        //   updateProd: false,
        // });
  
        // Use await here to wait for the response
        const response = await axios.get(
          `${import.meta.env.VITE_LINK}/products`
        );
  
  
        setData(response.data.product);
  console.log(response.data.product)
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItem: response.data.product,
        });
  
        localStorage.removeItem("product");
        localStorage.setItem("product", JSON.stringify(response.data.product));
      } catch (err) {
        const responseText = err.response.data;
  
        toast.error(responseText.msg);
      }
    
  }


  useEffect(() => {

    fetchingData();

  }, []);

    const category = [
        { value: "Fast Food", label: "https://i.ibb.co/brJpr0D/burg.png" },
        { value: "Biriyani", label: "https://i.ibb.co/6gwBTBX/chicken-biryani-traditional-indian-cuisine-png.webp" },
        { value: "Pasta", label: "https://i.ibb.co/ByRb7PH/pngtree-spaghetti-vector-element-png-image-4158219-removebg-preview.png" },
        { value: "Chicken", label: "https://i.ibb.co/vXhsgrt/chicken.png" },
        { value: "Drinks", label: "https://i.ibb.co/tcxn9hr/juice.png" },
        { value: "Icecream", label: "https://i.ibb.co/N6Vy27P/ice.png" },
      ];
  const rowContainer = useRef();
  const [filter, setFilter] = useState("Fast Food");
//   useEffect(() => {
//     rowContainer.current.scrollLeft += scrollValue;
//   }, [scrollValue]);

 

  return (
    <>
      <div
        ref={rowContainer}
        className={`w-96 md:w-full flex items-center justify-center overflow-hidden  p-14 md:p-20 gap-4 scroll-smooth  ${
          flag
            ? "overflow-x-hidden scrollbar-none"
            : "overflow-x-hidden flex-wrap"
        }`}
      >
        {category &&
          category.map((category) => (
            <div
              // key={category?.id}
              key={category?.value}

              className={`w-96 md:w-full b-orange-300 flex items-center scrollbar-none  justify-center overflow-hidden lg:justify-center scrollbar-none `}
              onClick={() => setFilter(category.value)}
            >
              <div
                className={`group ${
                  filter === category.value ? "border border-orange-200  border-b-4 border-b-orange-500" : "border border-gray-200 hover:border-orange-400 opacity-30 hover:opacity-70"
                } md:w-28 md:h-32 w-12 h-20 cursor-pointer overflow-hidden rounded-lg drop-shadow-xl flex flex-col items-center justify-center duration-150 transition-all ease-in-out`}
              >
                <div className="w-8 h-8 md:w-16 md:h-16">
                  <img src={category.label} className="" alt="" />
                </div>
                <p className="text text-sm md:text-lg">{category.value}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full -mt-14">
        {data ?
          (<RowContainer
          flag={false}
          data={data?.filter((n) => n.category === filter)}
        />) : (<div>

          <Data_Lodder />

        </div>)
        }
      </div>
    </>
  );
}