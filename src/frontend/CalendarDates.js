import React, {useContext } from "react";
import {CalendarMonthContext} from "./CalendarMonthInfo.js";
import {attendanceDataContext} from "../firebase/AttendanceContextProvider.js"

const CalendarDates = () => {
   let i = 0;
   const {spaceDateMonthInfo} = useContext(CalendarMonthContext);
   const spaceDateArray = [...spaceDateMonthInfo.spaceDateArray];
   const len = spaceDateMonthInfo.spaceLength;
   const {attendanceData} = useContext(attendanceDataContext);
    

    return (
      <div className="calendar_dates">
         <ul>
            {/* if only 0, 1, 2 stored in Array */}
            {/* {spaceDateArray.map((elem, index) =>(
                (spaceArray.length > index) ? (
                  <li key={index}>{`${elem}`}</li>
                ) : (attendanceData[index - spaceArray.length] == 0) ? (
                  <li className="absent" key={index}>
                    <span>{elem}</span>
                  </li>
                ) : (attendanceData[index - spaceArray.length] == 1) ? (
                  <li className="attendanceData" key={index}>
                    <span>{elem}</span>
                  </li>
                ) : (attendanceData[index - spaceArray.length] == 2) ? (
                  <li className="holiday" key={index}>
                    <span>{elem}</span>
                  </li>
                ) : (
                  <li className="other" key={index}>
                  <span>{elem}</span>
                  </li>
                  )
                ))} */}

            {/* if date and its attendace stored in Array */}
            {spaceDateArray.map((elem, index) => {
               if (index < len && attendanceData[i]) {
                  return <li key={index}></li>;
               }
               else if (index < len && !attendanceData[i]) {
                  return <li key={index}></li>;
               }
               // ###############
               else if (index >= len && attendanceData[i]) {
                  if (elem == attendanceData[i].date && attendanceData[i].record) {
                     i++;
                     return (
                        <li className="present" key={index}>
                           <span>{elem}</span>
                        </li>
                     );
                  } else if (elem == attendanceData[i].date && !attendanceData[i].record) {
                     i++;
                     return (
                        <li className="absent" key={index}>
                           <span>{elem}</span>
                        </li>
                     );
                  } else {
                     return (
                        <li className="holiday" key={index}>
                           <span>{elem}</span>
                        </li>
                     );
                  }
               }
               // ###############3
               else {
                  return (
                     <li className="other" key={index}>
                        <span>{elem}</span>
                     </li>
                  );
               }
            })}
            
         </ul>
      </div>
   );
};

export default CalendarDates;
