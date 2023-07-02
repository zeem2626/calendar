import React, { useContext, useState, useEffect } from "react";
import Days from "./Days.js";
import CalendarDates from "./CalendarDates.js";
import { CalendarMonthContext } from "./CalendarMonthInfo.js";
import {attendanceDataContext} from "../firebase/AttendanceContextProvider.js"


const Calendar = () => {
   const { spaceDateMonthInfo, setSpaceDateMonthInfo, monthInfo } =
      useContext(CalendarMonthContext);
   const {getAttendanceData, setAttendanceData} = useContext(attendanceDataContext);
   const [input, setInput] = useState({ year: "", month: "", monthName: "" });
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
   
   const numberOfYears = ["Year"];
   for(let i=2030; i>=1900; i--){
      numberOfYears.push(i)
   }

   const handleChange = (event) => {
      const { name, value } = event.target;
      setInput((prev) => ({ ...prev, [name]: value }));
   };

   const handleClick = (event, year, month) => {
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
      setAttendanceData(getAttendanceData(year, month));
      setSpaceDateMonthInfo(monthInfo(year, month));
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
            <button
               className="getBtn"
               onClick={(event) => handleClick(event, input.year, input.month)}
            >
               Show
            </button>
         </div>

         <div className="calendar_container">
            <div className="calendar_body">
               <p className="warning">{warn}</p>
               {/* <header className="calendar_header">check</header> */}
               <header className="calendar_header">{`${spaceDateMonthInfo.monthName} ${spaceDateMonthInfo.yearName}`}</header>
               <Days />

               <div className="underline"></div>

               <CalendarDates />
            </div>
         </div>
      </div>
   );
};

export default Calendar;
