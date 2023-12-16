import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
// import "../src/components/home/Reservation/Calender.css";
// import Home from "./pages/Home";
// import Foods from "./pages/Foods"
// import Profile from "./pages/Profile";
// import Signin from "./pages/Signin";
// import SignUp from "./pages/SignUp";
// import PrivateRoute from "./components/PrivateRoute";
// import ForgotPassword from "./pages/ForgotPassword";
// import Header from "./components/Header";
// import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./componennts/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import Footer from "./componennts/Footer/Footer";
// import Admin from "./pages/Admin/Admin";
// import FoodItems from "./pages/Admin/FoodItems";
// import Reviews from "./pages/Admin/Reviews";
// import Users from "./pages/Admin/Users";
// import Wallet from "./pages/Admin/Wallet";
// import PrivateAdminRoute from "./components/PrivateAdminRoute";
// import Sidebar from "./components/admin_comp/Sidebar";
// import { useStateValue } from "./context/StateProvider";
// import { getAllFoodItems } from "./utils/firebaseFunctions";
// import { actionType } from "./context/reducer";
// import SingleFood from "./pages/SingleFood";
// // import { getAuth } from "firebase/auth";
// import { validateUserJWTTOken } from "./api";



function App() {
  const [data, setData] = useState({ message: '' });
  const [{ foodItem, cartShow }, dispatch] = useStateValue();
console.log(foodItem)
  async function fetchingData() {
    console.log("holo h" + import.meta.env.VITE_LINK);
    if (data) {
      try {
        // dispatch({
        //   type: actionType.UPDATE_PRODUCTS,
        //   updateProd: false,
        // });
  
        // Use await here to wait for the response
        const response = await axios.get(
          `${import.meta.env.VITE_LINK}/products`
        );
  
        console.log("respons" + response.data.product);
  
        setData(response.data.product);
  
        dispatch({
          type: actionType.SET_FOOD_ITEMS,
          foodItem: response.data.product,
        });
  
        localStorage.removeItem("product");
        localStorage.setItem("product", JSON.stringify(response.data.product));
      } catch (err) {
        const responseText = err.response.data;
  
        console.log(responseText);
        toast.error(responseText.msg);
        console.log(err);
      }
    }
  }


  useEffect(() => {

    fetchingData();

    // fetch('http://localhost:4001/')
    //   .then(response => response.json())
    //   .then(data => setData(data))
    //   .catch(error => console.error('Error:', error));
  }, []);

  console.log(data);
  




  return (
    <>
      <Router>
        {/* <Route path="/admin/*" element={<Sidebar />} /> */}
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
         <Footer/>
      </Router>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
