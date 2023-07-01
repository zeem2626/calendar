import React, { useContext, useState, useEffect } from "react";
import Days from "./Days.js";
import CalendarDates from "./CalendarDates.js";

const Calendar = () => {
   let currDate = new Date();
   currDate = currDate.toString().split(" ");
   let currMonth;
   if(currDate[1]=="Jan") currMonth = 1;
   else if(currDate[1]=="Feb") currMonth = 2;
   else if(currDate[1]=="Mar") currMonth = 3;
   else if(currDate[1]=="Apr") currMonth = 4;
   else if(currDate[1]=="May") currMonth = 5;
   else if(currDate[1]=="Jun") currMonth = 6;
   else if(currDate[1]=="Jul") currMonth = 7;
   else if(currDate[1]=="Aug") currMonth = 8;
   else if(currDate[1]=="Sep") currMonth = 9;
   else if(currDate[1]=="Oct") currMonth = 10;
   else if(currDate[1]=="Nov") currMonth = 11;
   else if(currDate[1]=="Dec") currMonth = 12;

   const [input, setInput] = useState({ year: "", month: "", monthName: "" });
   const [selectedDate, setSelectedDate] = useState({
      year: currDate[3],
      month: currMonth,
      monthName: currDate[1],
   });
   const [warn, setWarn] = useState("");

   const numberOfMonths = [
      "Month",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];
   const numberOfYears = [
      "Year",
      2015,
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
   ];

   const handleChange = (event) => {
      const { name, value } = event.target;
      let mName = event.target.innerText.split("\n")[value];

      if (name == "month")
         setInput((prev) => ({ ...prev, [name]: value, monthName: mName }));
      setInput((prev) => ({ ...prev, [name]: value }));
   };

   const handleClick = (event) => {
      event.preventDefault();
      if (
        input.year == "" ||
         input.year == "Year" ||
         input.month == "" ||
         input.month == "Month" ||
         input.month == 0
      ) {
         setWarn("Enter Correct Date");
         setTimeout(() => {
            setWarn("");
         }, 1000 * 2);
         return;
      }

      setSelectedDate(input);
   };

   return (
      <div>
            <div className="input_value">
               {/* <label htmlFor="">Month</label> */}
               <select className="selectDate" name="month" onChange={handleChange}>
                  {/* <option value={selectedDate.month}>{selectedDate.month}</option> */}
                  {numberOfMonths.map((elem, index) => (
                     <option value={index} key={index}>
                        {elem}
                     </option>
                  ))}
               </select>

               {/* <label htmlFor="">Year</label> */}
               <select className="selectDate" name="year" onChange={handleChange}>
                  {/* <option value={selectedDate.year}>{selectedDate.year}</option> */}
                  {numberOfYears.map((elem, index) => (
                     <option value={elem} key={index}>
                        {elem}
                     </option>
                  ))}
               </select>
               <button className="getBtn" onClick={handleClick}>Show</button>
            </div>

         <div className="calendar_container">
            <div className="calendar_body">
               <p className="warning">{warn}</p>
               <header className="calendar_header">{`${selectedDate.monthName} ${selectedDate.year}`}</header>
               <Days />

               <div className="underline"></div>

               <CalendarDates selectedDate={selectedDate} />
            </div>
         </div>
      </div>
   );
};

export default Calendar;
