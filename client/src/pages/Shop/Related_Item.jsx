import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../context/StateProvider';
import { MdShoppingBasket } from "react-icons/md";
import { BsCartPlusFill } from "react-icons/bs";
import { useNavigate } from 'react-router';
import { motion } from "framer-motion";
import { actionType } from '../../context/reducer';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


// function SampleNextArrow(props) {
//     const { className, style, onClick,textColor } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", color: textColor  }}
//         onClick={onClick}
//       />
//     );
//   }
  
//   function SamplePrevArrow(props) {
//     const { className, style, onClick, textColor } = props;
//     return (
//       <div
//         className={className}
//         style={{ ...style, display: "block", color: textColor }}
//         onClick={onClick}
//       />
//     );
//   }
  



export default function Related_Item({category}) {
    const [quantity, setQuantity] = useState(1);
  const [updatedItem, setUpdatedItem] = useState([]);
    const navigate = useNavigate();
    const [{ foodItem,cartItems }, dispatch] = useStateValue();
    const[data,setData] = useState(null);
    useEffect(() => {
        setData(foodItem?.filter((n) => n.category === category))
        console.log(foodItem)
    }, [category])
    console.log(data)
    const gridORlist = false;
    const flag = false;
    const spring = {
        type: "spring",
        damping: 10,
        stiffness: 100
      }
      const stopEventPropagationTry = (event) => {
        if (event.target != event.currentTarget) {
          event.stopPropagation();
        }
      };



      const cartDispatch = () => {
        // localStorage.setItem("cartItems", JSON.string(updatedItem));
        localStorage.removeItem("cartItems");
        localStorage.setItem("cartItems", JSON.stringify(updatedItem));
        dispatch({
          type: actionType.SET_CART_ITEMS,
          cartItems: updatedItem,
        });
      };



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
       
        // if (onDataLengthChange) {
        //   onDataLengthChange(data.length); // Call the callback to update length in parent
        // }
      }, [cartItems, data]);

      const settings = {
        dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,

      };
  return (
    <div className=' items-center justify-center w-3/4 h-screen'>
       <Slider {...settings}>
          {data &&
          data.map((item) => (
            <div
              key={item?.id}
              onClick={() => navigate(`/singlefood/${item?.id}`)}
              className={` h-auto bg-gray-10 border  bl rounded-lg p-4 my-6 backdrop-blur-lg hover:drop-shadow-2xl mt-20`}
            >
              {/* <NavLink to={`/singlefood/${item?.id}`}> */}
              <div className={``}>
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
</Slider>
    </div>
  )
}
