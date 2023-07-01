import React, { createContext, useContext, useState } from "react";

const attendanceDataContext = createContext();

const AttendanceContextProvider = ({children}) => {
      // const present = [
      //   0, 1, 1, 1, 2, 2, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 2, 2, 1, 1, 0, 1, 1, 0,
      //   1,
      // ];

    const [data, setData] = useState([
        // { date: 1, record: true },
        // { date: 2, record: true },
        // { date: 3, record: false },
        // { date: 6, record: true },
        // { date: 7, record: true },
        // { date: 8, record: false },
        // { date: 9, record: false },
        // { date: 13, record: true },
        // { date: 14, record: false },
        // { date: 15, record: true },
        // { date: 16, record: false },
        // { date: 17, record: true },
        // { date: 20, record: true },
        // { date: 21, record: true },
        // { date: 22, record: true },
        // { date: 23, record: true },
        // { date: 24, record: true },
      ]);

      return (
        <attendanceDataContext.Provider value={data}>
            {children}
        </attendanceDataContext.Provider>
      );
}
    
export { attendanceDataContext };
export default AttendanceContextProvider;
