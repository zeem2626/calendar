import React, { useEffect, useState, useContext } from "react";
import { attendanceDataContext } from "../firebase/AttendanceContextProvider.js";
import CalendarMonthInfo from "./CalendarMonthInfo.js";

const CalendarDates = ({selectedDate}) => {
  const {space, numberOfDays} = CalendarMonthInfo(selectedDate.year, selectedDate.month);
//   console.log(space)
//   console.log(numberOfDays)
   const spaceArray = Array(space).fill("");
   const dateArray = [...spaceArray, ...numberOfDays];

   let i = 0;

  //  const [dateArray, setDate] = useState(date);

   useEffect(() => {
      // setDate([...spaceArray, ...dateArray]);
    }, []);
    
    const attendanceData = useContext(attendanceDataContext);

    return (
      <div className="calendar_dates">
         {/* <CalendarMonthInfo year={2023} month={4}/> */}
         <ul>
            {/* if only 0, 1, 2 stored in Array */}
            {/* {dateArray.map((elem, index) =>(
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
            {dateArray.map((elem, index) => {
               if (index < spaceArray.length && attendanceData[i]) {
                  return <li key={index}></li>;
               }
              else if (index < spaceArray.length && !attendanceData[i]) {
                  return <li key={index}></li>;
               }
               // #################
               else if (index >= spaceArray.length && attendanceData[i]) {
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
