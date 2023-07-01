import React, {useState, createContext} from 'react'
import "./App.css"
import Calendar from "./Calendar"
import Days from "./Days"
import AttendanceContextProvider from "../firebase/AttendanceContextProvider.js"
import CalendarMonthInfo2 from './CalendarMonthInfo2'

const App = () => { 

  return (
  <div>

      <AttendanceContextProvider >
        <Calendar />
      </AttendanceContextProvider >

  </div>
  )
}

export default App
