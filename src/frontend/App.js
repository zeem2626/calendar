import React from "react";
import "./App.css";
import Calendar from "./Calendar";
import CalendarMonthInfo2 from "./CalendarMonthInfo.js";
import AttendanceContextProvider from "../firebase/AttendanceContextProvider";

const App = () => {
   return (
      <div>
         <CalendarMonthInfo2>
            <AttendanceContextProvider>
               <Calendar />
            </AttendanceContextProvider>
         </CalendarMonthInfo2>
      </div>
   );
};

export default App;
