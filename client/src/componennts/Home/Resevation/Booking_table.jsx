import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useStateValue } from '../../../context/StateProvider';
import { add, format } from "date-fns";
import { toast } from "react-toastify";


export default function Booking_table({
    onDateSelect,
    justdate,
    visible,
    onClose,
    timeRange,
    selectDate,
    selectedGuest=1,
  }) {
    const [filter, setFilter] = useState("09:00");
    // const [time, setTime] = useState(null);
    const [prevTableId, setPrevTableId] = useState(null);
    const [tableData, setTableData] = useState([
        { id: "table1", name: "Table 1" },
        { id: "table2", name: "Table 2" },
        { id: "table3", name: "Table 3" },
        { id: "table4", name: "Table 4" },
        { id: "table5", name: "Table 5" },
        { id: "table6", name: "Table 6" },
      ]);
      const [resvData, setResvData] = useState({
        guest: selectedGuest,
      });
      const [{ foodItem, user }, dispatch] = useStateValue();

      const [databaseReserv, setDatabaseReserv] = useState([]);
      const newdata = (data) => setDatabaseReserv(data);


      async function getAllReservation () {
        const response = await axios.get(
            `${import.meta.env.VITE_LINK}/reservation`
          );
          setDatabaseReserv(response.data.reservation);
      }

console.log(databaseReserv)
      useEffect(() => {
    getAllReservation();
        //   getAllReservationData().then(newdata);
        }, []);
let filteredData;
if (selectDate.justdate != null && databaseReserv.length>0) {
    filteredData = databaseReserv.filter(
      (item) => item.date === format(selectDate.justdate, "yyyy-MM-dd")
    );
  }

  if (filteredData && filter != null && filter !== undefined && databaseReserv.length > 0) {
    filteredData = filteredData.filter((item) => item.time === filter);
  }
  
  
  
        const isTableAvailable = (tableId) => {
            return !filteredData.some((item) => item.table === tableId);
          };

    const handleOnChange = (e) => {
        if (e.target.id === "cont" || e.target.id === "close") {
          onClose();
        }
      };


      const timeSlotSet = (value) => {
        setFilter(value)
        setResvData((prev) => ({
            ...prev,
            time:value,           
          }));
      }


      const bookingTable = (tableId, tableName) => {
        if (isTableAvailable(tableId)) {
          if (prevTableId !== null && isTableAvailable(prevTableId)) {
            const prevTableElement = document.getElementById(prevTableId);
            prevTableElement.classList.remove("table-selected");
          }
    
          const tableElement = document.getElementById(tableId);
          tableElement.classList.add("table-selected");
    
          setResvData((prev) => ({
            ...prev,
            date: format(selectDate.justdate, "yyyy-MM-dd"),
            time:filter,
            table: tableId,
            tableName: tableName,
            guest: selectedGuest,
            userid: user.id,
            user_name: user.name,
            userEmail: user.email,
          }));
    
          setPrevTableId(tableId);
        }
      };
const {date , time , table , tableName ,guest ,userid ,user_name , userEmail} = resvData

      console.log(resvData)
      console.log(selectedGuest)
console.log(user)
console.log(selectDate)



      async function handleConfiremClick ()  {
        if(!date || !time || !table || !tableName || !guest || !userid || !user_name || !userEmail)
        {
            toast.error("please provide all value")
        }
        try {
            const response = await axios.post(
              `${import.meta.env.VITE_LINK}/reservation`,
              resvData
            );
            console.log(response.data);
            // setData(response.data.product);
            // toast.success("Product added succesfully..!");
            // dispatch({
            //   type: actionType.UPDATE_PRODUCTS,
            //   updateProd: true,
            // });
            toast.success("New Product Added.");
            onClose();
            // setFormData((prevState) => ({
            //   ...prevState,
            //   item_name: "",
            //   sale: 0,
            //   price: 0,
            //   category: "",
            //   quantity: 1,
            //   cartORadd: "cart",
            //   SKU: "",
            //   short_descrip: "",
            //   full_descrip: "",
            //   gal_1_imgURL: null,
            //   gal_2_imgURL: null,
            //   gal_3_imgURL: null,
            //   image: null,
            // }));
            // localStorage.setItem("product", JSON.stringify(response.data.product));
            // const { user, token } = response.data;
            // console.log(user);
            // console.log(token);
            // dispatch({
            //   type: actionType.REGISTER_USER_SUCCESS,
            //   user: user,
            //   token: token,
            // });
            // localStorage.setItem("user", JSON.stringify(user));
            // localStorage.setItem("token", token);
          } catch (err) {
            const responseText = err.response.data;
    
            console.log(responseText);
            toast.error(responseText.msg);
            console.log(err);
            onClose();
          }
    
        // onClose();
      }

console.log(visible)
 if(visible){
    return (
        <div
            id="cont"
            onClick={handleOnChange}
            className="fixed z-50 inset-0 flex items-center justify-center k bg-opacity-5 backdrop-blur-sm bg-slate-500"
          >
            <div className="p-5 w-3/4 rounded-md flex-row gap-5 items-center justify-center bg-slate-900 h-3/4 ">
              <div className="flex items-center justify-center">
                <p className="text text-4xl text-white font-semibold">Book a table</p>
              </div>
              <div className="flex flex-col md:flex-row md:grid-rows-2">
                <div className="md:flex-1 w-full md:w-1/5 flex-row md:flex-col bg-gray-500 rounded-lg h-20 mt-10 md:mt-0">
                  <p className="flex items-center justify-center ">Todays available</p>
                  <p className="flex items-center justify-center "> Time slot</p>
                  <div className="p-5 flex md:flex-1 flex-row md:flex-col gap-2 w-full bg-slate-900 max-h-20 md:max-h-80 overflow-x-auto md:overflow-y-auto scrollbar-none">
                    {timeRange &&
                      timeRange.map((time) => (
                        <div
                          key={time.value}
                          value={time.value}
                          className=" text-gray-700 "
                          onClick={() => timeSlotSet(time.value)}
                        >
                          <p
                            className={` ${
                              filter  === time.value ? "bg-slate-700 text-white" : "bg-slate-300"
                            } hover:bg-slate-500 p-1 border-b border-b-slate-950 w-20 md:w-full flex items-center justify-center rounded-lg`}
                            // onClick={() => setTime(time.value)}
                          >
                            {time.label}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="md:flex-4 w-4/5 gap-4 mt-14 md:mt-5 ">
                  <div>
                    <div className="flex flex-col items-start justify-start md:items-end md:justify-end p-3 md:flex-row md:gap-6">
                      <div className="flex flex-row gap-2 items-center justify-evenly">
                        <div className="w-5 h-5 rounded-full bg-green-800">
                          
                        </div>
                      <p className="text text-white">available</p>
                      </div>
                      <div className="flex flex-row gap-2 items-center justify-evenly">
                        <div className="w-5 h-5 rounded-full bg-red-800">
                          
                        </div>
                      <p className="text text-white">booked at this time</p>
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:flex-wrap md:gap-0 gap-1 p-5 w-96 h-[250px] md:w-[800px] overflow-y-auto scrollbar-none">
                      {tableData.map((table) => (
                        <div className="w-1/3 px-1 mb-4" key={table.id}>
                          <div
                            id={table.id}
                            className={` flex flex-col md:flex-row items-center justify-end w-52 h-20 bg-slate-600  rounded-xl ${
                              isTableAvailable(table.id)
                                ? "hover:bg-slate-800 transition ease-in-out"
                                : "bg-slate-800 text-slate-500"
                            } `}
                            onClick={() => bookingTable(table.id, table.name)}
                          >
                            <p className="flex-1 items-center justify-center p-2 text-sm">
                              {table.name} <br />
                              {isTableAvailable(table.id)
                                ? "Available"
                                : `Booked by: ${databaseReserv.find(
                                    (item) => item.table === table.id
                                  )?.user_name || ""}`}
                            </p>
                            <div  id={table.id} className={`table-div ${
                              isTableAvailable(table.id)
                                ? "table-available"
                                : "table-booked"
                            } bg-white w-full md:w-10 rounded-e-xl h-full text text-cyan-700 items-end justify-end `}>
                              
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className=" flex items-center justify-center md:items-end md:justify-end mt-4 md:mt-10 ml-14 md:ml-0">
                    <button
                      onClick={onClose}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg mr-4"
                    >
                      Close
                    </button>
                    <button
                      onClick={handleConfiremClick}
                      className="bg-green-500 text-white px-4 py-2 rounded-lg"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      )
 }
}
