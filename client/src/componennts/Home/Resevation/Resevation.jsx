import { add, format } from "date-fns";
import React, { useEffect, useState } from "react";
// import Select from "react-tailwindcss-select";
// import Calender from "./Reservation/Calender";
import { Combobox } from "@headlessui/react";
import Calender from "./Calender";
import TablePop from "./TablePop";
// import TablePop from "./Reservation/TablePop";

export default function Reservation() {
  const [showPop, setShowPop] = useState(false);
  const [tablePop, setTablePop] = useState(false);
  const [selectDate, setSelectDate] = useState({
    justdate: null,
    dateTime: null,
  });
  const [options, setOptions] = useState([]); // Initialize options as a state variable
  const [selectedTime, setSelectedTime] = useState(null);
  

  const handleDateSelect = (date) => {
    setSelectDate((prev) => ({ ...prev, justdate: date }));
  };

  const handleOnClose = () => {
    setShowPop(false);
    setTablePop(false);
  };

  // Calculate time ranges and update options when selectDate.justdate changes
  useEffect(() => {
    if (selectDate.justdate) {
      const beginning = add(selectDate.justdate, { hours: 9 });
      const end = add(selectDate.justdate, { hours: 17 });
      const interval = 30;
      const newOptions = [];

      for (let i = beginning; i <= end; i = add(i, { minutes: interval })) {
        newOptions.push({
          value: format(i, "HH:mm"), // Format the time as needed
          label: format(i, "hh:mm a"), // Format the time as needed
        });
      }

      setOptions(newOptions);

      if (
        (tablePop && options === null) ||
        selectedTime === null ||
        selectDate.justdate === null
      ) {
        setTablePop(false);
      }
    }
  }, [selectDate.justdate]);

  useEffect(() => {
    if (
      (tablePop && options === null) ||
      selectedTime === null ||
      selectDate.justdate === null
    ) {
      setTablePop(false);
    }
  }, [tablePop]);

  return (
    <div className="flex items-center justify-between ">
      <div className="bg-[url('https://i.ibb.co/vvGScW7/a-cool-restaurant-with-people-table-cinematic-lighting-ultra-details-8k-realistic-modern-night-lig-1.png')] md:-ml-[00px] min-w-[400px] rounded-r-full bg-fixed z-20" style={{ backgroundSize: 'cover', height: '400px' }}>
        <div className="md:p-20 opacity-100">
        <div className="flex items-start p-4 md:p-0 justify-center flex-col text-white ">
          <p className="text mt-5 md:mt-0 text-red-00 font-medium font-mono text-2xl md:text-3xl hero-font-2">Booking Table</p>
          <p className="font-semibold text-3xl md:text-5xl md:mb-5 hero-font">Make A Reservation</p>
        </div>

        <div>
          <form action="">
            <div className="flex flex-col pl-10 pr-20 md:p-0 min-w-[390px] md:min-w-[800px]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-7
              ">
                <input
                  className="p-2 border border-gray-700 rounded md-5"
                  placeholder="Select Date"
                  value={
                    (selectDate.justdate &&
                      format(selectDate.justdate, "yyyy-MM-dd")) ||
                    ""
                  }
                  onClick={() => setShowPop(true)}
                  required
                />
                <Calender
                  onClose={handleOnClose}
                  visible={showPop}
                  onDateSelect={handleDateSelect}
                />

              
                <select
                  value={selectedTime}
                  placeholder="select time" // Set the selected value, you should have a state variable for this
                  onChange={(e) => setSelectedTime(e.target.value)} // Handle the change event
                  className="p-2 border border-gray-700 rounded md-5"
                  required
                >
                  {options &&
                    options.map((time) => (
                      <option
                        key={time.value}
                        value={time.value}
                        className="flex items-center text-gray-700 gap-3 max-h-40 overflow-y-auto"
                      >
                        {time.label}
                      </option>
                    ))}
                </select>

                <input
                  type="text"
                  className="p-2 border border-gray-700 rounded md-5"
                  placeholder="Select Table"
                  //   value={item_name}
                  //   onChange={onChange}
                  onClick={() => setTablePop(true)}
                  required
                />
                {/* {(selectDate && selectedTime && options) ?? (<TablePop
                onClose={handleOnClose}
                visible={tablePop}
                onDateSelect={handleDateSelect}
              />) } */}
                <TablePop
                  onClose={handleOnClose}
                  visible={tablePop}
                  onDateSelect={handleDateSelect}
                  selectDate={selectDate}
                  selectedTime={selectedTime}
                  timeRange={options}
                />
              </div>

              <div className="grid grid-cols-1 mt-4">
                <textarea
                  type="text"
                  className="p-2 border border-gray-700 rounded md-5 "
                  placeholder="Comment"
                  id="item_name"
                  //   value={item_name}
                  //   onChange={onChange}
                  required
                />
              </div>
            </div>
          </form>
        </div>
        </div>
      </div>
      <div className="absolute w-full z-10 overflow-hidden ">
        <div className=" transform scale-100 overflow-visible w-full bg-red-0 flex items-start justify-end ml-96">
        <img src="https://i.ibb.co/y5HyBkg/43-435259-healthy-food-clipart-free-vector-art-stock-graphics-removebg-preview.png" alt="" className="o object-cover bg-red-00"/>

        </div>
      </div>
      <div className="absolute w-full z-10 overflow-hidden ">
        <div className=" transform overflow-visible w-full bg-red-0 flex items-start justify-end -ml-16">
        <img src="https://i.ibb.co/WkQMxGk/chicken-biryani-traditional-indian-cuisine-png.webp" alt="chicken-biryani-traditional-indian-cuisine-png" alt="" className="o object-contain w-96 h- bg-red-00"/>

        </div>
      </div>
    </div>
  );
}