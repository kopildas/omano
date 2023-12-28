import React, { useEffect, useState } from "react";
import { FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa6";


import { BsGrid, BsList } from "react-icons/bs";
import { useStateValue } from "../../context/StateProvider";
import CartContainer from "../../componennts/Home/Cart/CartContainer";
import RowContainer from "../../componennts/Home/RowContainer/RowContainer";
// import { category } from "../components/admin_comp/Add_popup";
// import CartContainer from "../components/home/CartContainer";
// import RowContainer from "../components/home/RowContainer";
// import { useStateValue } from "../context/StateProvider";



export default function Foods() {
  const bar = ">>";
  const [filter, setFilter] = useState("Fast Food");
  const [view, setView] = useState("true");
  const [sortt, setsortt] = useState("false");
  const [{ foodItem, cartShow }, dispatch] = useStateValue();
  const [foods, setFoods] = useState(foodItem);
  let [sortedFoods, setSortedFoods] = useState(foodItem); // Use a separate state variable for the sorted array
  const [text, setText] = useState("");
  const [priceArry, setPriceArry] = useState(0);
  const [price, setPrice] = useState(0);
  const [maxPrFilter, setMaxPrFilter] = useState(0);
  const [length, setLength] = useState(0);
  const [change, setChange] = useState(false)

  const category = [
    { value: "Fast Food", label: "https://i.ibb.co/brJpr0D/burg.png" },
    { value: "Biriyani", label: "https://i.ibb.co/6gwBTBX/chicken-biryani-traditional-indian-cuisine-png.webp" },
    { value: "Pasta", label: "https://i.ibb.co/ByRb7PH/pngtree-spaghetti-vector-element-png-image-4158219-removebg-preview.png" },
    { value: "Chicken", label: "https://i.ibb.co/vXhsgrt/chicken.png" },
    { value: "Drinks", label: "https://i.ibb.co/tcxn9hr/juice.png" },
    { value: "Icecream", label: "https://i.ibb.co/N6Vy27P/ice.png" },
  ];

  const handleDataLengthChange = (length) => {
    setLength(length);
  };

  const priceFilter = (e) => {
    setChange(!change)
    setPrice(e.target.value);

    // Convert the input value to a number
    const selectedPrice = parseFloat(e.target.value);

    if (selectedPrice === 0) {
      setMaxPrFilter(maxPrice + 10);
    } else {
      setMaxPrFilter(maxPrice + 10);
    }

    let foo = [...sortedFoods];

    if (selectedPrice === 0) {
      foo = foo.filter((curnt) => parseFloat(curnt.price) === selectedPrice);
    } else {
      foo = foo.filter((curnt) => parseFloat(curnt.price) <= selectedPrice);
    }

    setFoods(foo);
    sorting;
    updateSearchValue;
  };

  const updateSearchValue = (e) => {
    setChange(!change)
    setText(e.target.value);
    let foo = [...sortedFoods];
    foo = foo.filter((food) =>
      food.item_name.toLowerCase().includes(e.target.value)
    );
    setFoods(foo);
    // setLength(foo.length);
  };

  //
  let maxPrice = 0;

  useEffect(() => {
    if (foodItem !== null) {
      setPriceArry(foodItem.map((curElm) => curElm.price));
      setSortedFoods(foodItem?.filter((n) => n.category === filter));
      setFoods(foodItem?.filter((n) => n.category === filter));
    }
  }, [foodItem,filter]);

  if (priceArry !== 0) {
    maxPrice = Math.max(...priceArry);
    // setMaxPrice(Math.max(...priceArry))
  }

  const sorting = (e) => {
    e.preventDefault();
    setChange(!change)

    // Create a copy of the sortedFoods array
    let sortedFoodsCopy = [...foods];

    if (text) {
      sortedFoodsCopy = sortedFoodsCopy.filter((food) =>
        food.item_name.toLowerCase().includes(text)
      );
    }

    if (e.target.value === "a-z") {
      sortedFoodsCopy = sortedFoodsCopy.sort((a, b) =>
        a.item_name.localeCompare(b.item_name)
      );
    }
    if (e.target.value === "z-a") {
      sortedFoodsCopy = sortedFoodsCopy.sort((a, b) =>
        b.item_name.localeCompare(a.item_name)
      );
    }
    if (e.target.value === "lowest") {
      sortedFoodsCopy = sortedFoodsCopy.sort((a, b) => a.price - b.price);
    }
    if (e.target.value === "highest") {
      sortedFoodsCopy = sortedFoodsCopy.sort((a, b) => b.price - a.price);
    }

    setsortt(true);
    setFoods(sortedFoodsCopy); // Update the state with the sorted array
    // setSortedFoods(sortedFoodsCopy);
  };

  return (
   <div className="flex flex-col">
   
   <div className="h-screen overflow-auto no-scrollbar">
      {cartShow && <CartContainer />}
      <div className="hidden md:flex md:cover_1">
        <div className="grid h-auto grid-flow-row border w-full pb-5 pt-2">
          <div className="flex flex-col items-start justify-center px-44">
            <p className="text-2xl font-semibold">Foods</p>
            <p className="text-xl">
              Home <span className="text-red-500 text">{bar}</span> Foods
            </p>
          </div>
        </div>
      </div>

      <div className=" h-96">
        <div className="h-5 mt-12 mb-16 ml-5 md:ml-32">
          <div className="flex flex-col md:flex-row">
            <div>
              {/* search bar need control event loop */}
              <form onSubmit={(e) => e.preventDefault()}>
                <input
                 className="border-2 px-3 p-1 rounded-md"
                  type="text"
                  name="text"
                  placeholder="Search"
                  value={text}
                  onChange={updateSearchValue}
                />

                {/* <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button> */}
              </form>
            </div>
            <div className="flex items-center flex-col md:flex-row md:gap-72 justify-between">
              <div className="  w-72">
                <p className="md:ml-20 ml-3 mt-2 text-lg font-semibold items-center justify-center">
                  Showing {length} of {length} results
                </p>
              </div>
              <div className="md:ml-20">
                <div className="ml-3 flex justify-between items-center gap-5 md:gap-2 md:justify-end">
                  {/* Left Div */}
                  <div>
                    <form className="" action="#">
                      <label htmlFor="sort"></label>
                      <select
                        name="sort"
                        id="sort"
                        className="p-2 mt-3 rounded-xl w-52 font-medium text-gray-500 cursor-pointer border-2"
                        onClick={sorting}
                      >
                        <option
                          className="p-1 cursor-pointer h-2"
                          value="lowest"
                        >
                          Price(lowest)
                        </option>
                        <option
                          className="p-1 cursor-pointer h-2"
                          value="highest"
                        >
                          Price(highest)
                        </option>
                        <option className="p-1 cursor-pointer h-2" value="a-z">
                          Price(a-z)
                        </option>
                        <option className="p-1 cursor-pointer h-2" value="z-a">
                          Price(z-a)
                        </option>
                      </select>
                    </form>
                  </div>

                  {/* Right Div */}
                  <div className="flex ">
                    <BsGrid
                      className={`${
                        view ? "text-red-600" : null
                      } text-2xl mt-3 cursor-pointer`}
                      onClick={() => setView(true)}
                    />
                    <BsList
                      className={`${
                        view ? null : "text-red-600"
                      } text-2xl mt-3 cursor-pointer`}
                      onClick={() => setView(false)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row">
            <div className=" md:h-auto ">
              {/* catagory in big screen */}
              <div className="bg-gray-100 rounded-md hidden md:flex">
                <div className="pl-2 pr-2 pt-2 pb-5">
                  <p className="text-lg font-bold">All Menu</p>

                  {category &&
                    category.map((category) => (
                      <div
                        key={category?.id}
                        onClick={() => setFilter(category.value)}
                      >
                        <div
                          className={`group ${
                            filter === category.value
                              ? "bg-orange-300"
                              : "bg-slate-100"
                          } w-48 h-8 hover:bg-orange-100 cursor-pointer rounded-lg drop-shadow-xl flex flex-row md:flex-col gap-3 items-center justify-center duration-200 transition-all ease-in-out mt-6`}
                        >
                          <p className="text-md font-semibold">
                            {bar} {category.value}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              <div
                // ref={rowContainer}
                className={`w-96 flex items-center gap-7 scroll-smooth md:hidden overflow-x-scroll scrollbar-none`}
              >
                {category &&
                  category.map((category) => (
                    <div
                      key={category?.id}
                      className={`w-full  flex justify-start lg:justify-center gap-3  scrollbar-none`}
                      onClick={() => setFilter(category.value)}
                    >
                      <div
                        className={`group ${
                          filter === category.value
                            ? "bg-red-500"
                            : "bg-slate-300"
                        } w-20 min-w[84px] h-25 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out`}
                      >
                        <div className="w-12 h-12 mt-4 text-sm text">
                          <img src={category.label} className="" alt="" />
                        </div>
                        <p className="text-sm p-2">{category.value}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <div className="mt-8 p-5 rounded-md bg-slate-100 hidden md:block">
                <p className="text-lg font-bold">Price filter</p>
                <p className="text-md font-semibold"><span className="text-orange-00 text-lg">$</span>{price}</p>

                <input
                  type="range"
                  id="cowbell"
                  name="cowbell"
                  min="0"
                  max={maxPrFilter ? maxPrFilter : maxPrice}
                  value={price}
                  step="10"
                  onChange={priceFilter}
                />
              </div>

              {/* <div className="mt-6 hidden md:flex">
                <p>popular tags</p>
              </div> */}
            </div>
            <div className=" hidden md:flex h-auto ">
              <div className="flex w-full h-auto ">
                {foods !== null && (view ? (
                  <RowContainer
                    gridORlist={true}
                    flag={false}
                    onDataLengthChange={handleDataLengthChange}
                    data={
                      foods
                    }
                  />
                ) : (
                  <RowContainer
                    gridORlist={false}
                    flag={false}
                    onDataLengthChange={handleDataLengthChange}
                    data={
                      foods
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex md:hidden h-auto">
            <div className="flex w-full h-auto">
              {foods !== null &&
                (view ? (
                  <RowContainer
                    gridORlist={true}
                    flag={false}
                    onDataLengthChange={handleDataLengthChange}
                    data={
                      foods
                    }
                  />
                ) : (
                  <RowContainer
                    gridORlist={false}
                    flag={false}
                    onDataLengthChange={handleDataLengthChange}
                    data={
                      foods
                    }
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>


   
   </div>
  );
}