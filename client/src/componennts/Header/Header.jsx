import React, { useEffect, useState } from "react";
import { MdShoppingBasket,MdOutlineLogin,MdOutlineFastfood } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useStateValue } from "../../context/StateProvider";
// import { actionType } from "../context/reducer";
// import Login from "./Login";
import { BiLogOut } from "react-icons/bi";
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaHome,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { actionType } from "../../context/reducer";

export default function Header({ children }) {
  const location = useLocation();
  const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
  console.log(user);

  const [isCurrentRouteAdmin, setIsCurrentRouteAdmin] = useState(false);

  const navigate = useNavigate();
  //   function pathMatchRoute(route) {
  //     const vl =
  //       location.pathname === "/admin" || location.pathname.startsWith("/admin/");
  //     // setIsCurrentRouteAdmin(vl);

  //     if (route === location.pathname) {
  //       // setIsCurrentRouteAdmin(false)
  //       return true;
  //     }
  //   }

  function activeHeader(route) {
    if (route === location.pathname) {
      // setIsCurrentRouteAdmin(false)
      return true;
    } else {
      return false;
    }
  }

  //   function adminOrNot() {

  //     if (
  //       location.pathname === "/admin" ||
  //       location.pathname.startsWith("/admin/")
  //     )return true;
  //     else return false;
  //   }

  //   const [popups, setPopups] = useState({
  //     login: false,
  //     signup: false,
  //   });

  // //   function togglePopup(popup) {
  // //     setPopups((prevState) => ({
  // //       ...prevState,
  // //       [popup]: !prevState[popup],
  // //     }));
  // //   }
  //   const [seen, setSeen] = useState(false);

  //   const [pagestate, setPageState] = useState("Log in");

  //   useEffect(() => {

  //       if (user && user.email === "testadminn@gmail.com") {
  //         setPageState("Admin");
  //         setSeen(!seen);
  //       } else if (user) {
  //         setPageState("Profile");
  //         setSeen(!seen);
  //       } else {
  //         setPageState("Log in");
  //       }
  //       // console.log(user);
  //       // console.log(user.email);

  //   }, [user]);

  //   function togglePop() {
  //     setSeen(!seen);
  //   }
  //   function callsign() {
  //     togglePop();
  //     togglePopup("signup");
  //   }
  //   function calllog() {
  //     console.log("callLog");
  //     togglePopup("login");
  //     console.log(popups);
  //     console.log(seen);
  //     console.log(pagestate);
  //     togglePop();

  //   }

  //   function cartShowing() {
  //     dispatch({
  //       type: actionType.SET_CART_SHOW,
  //       cartShow: !cartShow,
  //     });
  //   }

  // for mobile view only
  const [isOpen, setIsOpen] = useState(false);
  //   const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/foods",
      name: "Foods",
      icon: <MdOutlineFastfood />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaRegChartBar />,
    }
  ];

  function cartShowing() {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    });
  }

  return (
    <>
      <header className="bg-white border-b shadow-sm sticky top-0 z-40">
        {/* desktop and tablate */}
        <div className="hidden md:flex justify-between items-center px-3 max-w-6xl mx-auto">
          <div>
            <img
              src="https://i.ibb.co/TP8bczH/logo-removebg-preview.png"
              alt="logo"
              className="h-16 cursor-pointer"
              onClick={() => {
                navigate("/");
                // adminOrNot();
              }}
            />
          </div>
          <div className="flex items-center">
            <ul className="flex space-x-10">
              <li
                className={`cursor-pointer py-3 hover:text-red-400 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  activeHeader("/")
                    ? "text-red-500 border-t-4 border-t-red-500"
                    : ""
                }`}
                onClick={() => {
                  navigate("/");
                  //   adminOrNot();
                }}
              >
                Home
              </li>
              <li
                className={`cursor-pointer py-3 hover:text-red-400 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  activeHeader("/foods")
                    ? "text-red-500 border-t-4 border-t-red-500"
                    : ""
                }`}
                onClick={() => {
                  navigate("/foods");
                  //   adminOrNot();
                }}
              >
                Products
              </li>
              <li
                className={`cursor-pointer py-3 hover:text-red-400 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  activeHeader("/about")
                    ? "text-red-500 border-t-4 border-t-red-500"
                    : ""
                }`}
                onClick={() => {
                  navigate("/about");
                  //   adminOrNot();
                }}
              >
                About us
              </li>

              <div
                className="relative flex items-center justify-center gap-9"
                onClick={cartShowing}
              >
                <MdShoppingBasket className="text-2xl text-gray-500 cursor-pointer" />
                {cartItems && cartItems.length > 0 && (
                  <div className="absolute -top-1 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <p className="text-white font-semibold text-xs">
                      {cartItems.length}
                    </p>
                  </div>
                )}
              </div>

              {!user ? (
                <ul className="flex gap-6">
                  <li
                    className={`cursor-pointer py-3 hover:text-red-400 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                      activeHeader("/sign-up")
                        ? "text-red-500 border-t-4 border-t-red-500"
                        : ""
                    }`}
                  >
                    <Link to="/sign-up">Sign up</Link>
                  </li>
                  <li
                    className={`cursor-pointer py-3 hover:text-red-400 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                      activeHeader("/login")
                        ? "text-red-500 border-t-4 border-t-red-500"
                        : ""
                    }`}
                  >
                    <Link to="/login">Login</Link>
                  </li>
                </ul>
              ) : (
                <li
                  className={`cursor-pointer py-3 hover:text-red-400 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                    activeHeader("/sign-in") ||
                    activeHeader("/profile") ||
                    activeHeader("/user")
                      ? "text-red-500 border-t-4 border-t-red-500"
                      : ""
                  }`}
                >
                  <div className="">
                    <button
                    onClick={(e) => {
                      e.preventDefault();
                      
                        navigate("/user");
                      
                    }}
                    >
                      user {/* {pagestate} */}
                    </button>
                    {/* {popups.login && pagestate === "Log in" && (
                    <Login toggle={calllog} />
                  )} */}
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* for mobile */}
        <div className="md:hidden flex justify-between items-center px-3 max-w-6xl mx-auto">
          <FaBars
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl text-gray-500 cursor-pointer"
          />
          <img
            src="https://i.ibb.co/TP8bczH/logo-removebg-preview.png"
            alt="logo"
            className="h-16 cursor-pointer mr-1"
            onClick={() => {
              navigate("/");
              //   adminOrNot();
            }}
          />
          <div
            className="relative flex items-center justify-center gap-9"
            onClick={cartShowing}
          >
            <MdShoppingBasket className="md:text-2xl text-4xl text-gray-500 cursor-pointer" />
            {cartItems && cartItems.length > 0 && (
              <div className="absolute -top-1 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                <p className="text-white font-semibold text-xs">
                  {cartItems.length}
                </p>
              </div>
            )}
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden w-screen bg-zinc-800 text-white z-50">
            <ul className="text-center">
              {menuItem.map((item) => (
                <li
                  key={item.path}
                  className={`cursor-pointer py-3 text-sm font-semibold border-b ${
                    activeHeader(item.path)
                      ? "text-red-400"
                      : ""
                  } `}
                  onClick={() => {
                    navigate(item.path);
                    setIsOpen(false);
                  }}
                >
                  <p className="w-auto flex items-center justify-center gap-4">
                    <p>{item.icon}</p>
                    <p>{item.name}</p>
                  </p>
                </li>
              ))}
              {!user ? (
               <>
                <li
                
                className={`cursor-pointer py-3 text-sm font-semibold border-b ${
                  activeHeader("/sign-up")
                    ? "text-red-400"
                    : ""
                } `}
                onClick={() => {
                  navigate("/sign-up");
                  setIsOpen(false);
                }}
              >
                <p className="w-auto flex items-center justify-center gap-4">
                  <p><VscSignIn/></p>
                  <p>Sign up</p>
                </p>
              </li>
                <li
                
                className={`cursor-pointer py-3 text-sm font-semibold border-b ${
                  activeHeader("/login")
                    ? "text-red-400"
                    : ""
                }`}
                onClick={() => {
                  navigate("/login");
                  setIsOpen(false);
                }}
              >
                <p className="w-auto flex items-center justify-center gap-4">
                  <p><MdOutlineLogin/></p>
                  <p>Login</p>
                </p>
              </li>
               </>
              ) : (
                <li
                
                className={`cursor-pointer py-3 text-sm font-semibold border-b ${
                  activeHeader("/user")
                    ? "text-red-400"
                    : ""
                }`}
                onClick={() => {
                  navigate("/user");
                  setIsOpen(false);
                }}
              >
                <p className="w-auto flex items-center justify-center gap-4">
                  <p><FaUserAlt /></p>
                  <p>User</p>
                </p>
              </li>
              )}
            </ul>
          </div>
        )}

        {/* {console.log(adminOrNot())} */}
      </header>
    </>
  );
}
