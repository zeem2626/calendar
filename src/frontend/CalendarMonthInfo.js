import { useState, createContext  } from "react";

const CalendarMonthContext = createContext();

const monthInfo = (year, month) => {
   let space ;
   let numberOfDays ;
   let monthName ;
   let yearName;

   const leapYear = (year) => {
      let leap;
      if (year % 4 == 0) {
         if (year % 100 == 0 && year % 400 != 0) leap = 0;
         else leap = 1;
      } else leap = 0;
      return leap;
   };

   const daysInMonth = (year, month) => {
      let numberOfDays;

      const leap = leapYear(year);

      if (
         month == 1 ||
         month == 3 ||
         month == 5 ||
         month == 7 ||
         month == 8 ||
         month == 10 ||
         month == 12
      )
         numberOfDays = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
         ];
      else if (
         month == 4 ||
         month == 6 ||
         month == 8 ||
         month == 9 ||
         month == 11
      )
         numberOfDays = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
         ];
      else if (leap)
         numberOfDays = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
         ];
      else
         numberOfDays = [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24, 25, 26, 27, 28,
         ];
         return numberOfDays;

   };

   const spaceInMonth = (year, month) => {
      let space ;
      let leap = leapYear(year);
      let total_days = (year - 1) * 365.25;
      let extra_days = total_days % 7;
      
      // calculating extra days in year
      
      //extra days in different months
      // calculating number of space in calendar
      if (month == 1) space = extra_days % 7;
      else if (month == 2) space = (extra_days + 3) % 7;
      else if (month == 5) space = (extra_days + 1 + leap) % 7;
      else if (month == 6) space = (extra_days + 4 + leap) % 7;
      else if (month == 8) space = (extra_days + 2 + leap) % 7;
      else if (month == 10) space = (extra_days + 0 + leap) % 7;
      else if (month == 3 || month == 11) space = (extra_days + 3 + leap) % 7;
      else if (month == 4 || month == 7) space = (extra_days + 6 + leap) % 7;
      else if (month == 9 || month == 12) space = (extra_days + 5 + leap) % 7;

      return space;
   };

   const getMonthName = ()=>{
      let monthName;
      if(month == 1) monthName = "Jan";
      else if(month == 2) monthName = "Feb";
      else if(month == 3) monthName = "Mar";
      else if(month == 4) monthName = "Apr";
      else if(month == 5) monthName = "May";
      else if(month == 6) monthName = "Jun";
      else if(month == 7) monthName = "Jul";
      else if(month == 8) monthName = "Aug";
      else if(month == 9) monthName = "Sep";
      else if(month == 10) monthName = "Oct";
      else if(month == 11) monthName = "Nov";
      else if(month == 12) monthName = "Dec";

      return monthName;
   }
   space = spaceInMonth(year, month);
   numberOfDays = daysInMonth(year, month);
   monthName = getMonthName(month);
   yearName = year;

   const spaceLength = Math.floor(space);
   const spaceArray = Array(spaceLength).fill("");
   const spaceDateArray = [...spaceArray, ...numberOfDays];

   return {spaceLength, spaceDateArray, monthName, yearName};
};

const todayDateTime = ()=>{
   let currDateTime = new Date();
   currDateTime = currDateTime.toString().split(" ");
   let currMonth;
   let currYear = currDateTime[3];
   
   if(currDateTime[1]=="Jan") currMonth = 1;
   else if(currDateTime[1]=="Feb") currMonth = 2;
   else if(currDateTime[1]=="Mar") currMonth = 3;
   else if(currDateTime[1]=="Apr") currMonth = 4;
   else if(currDateTime[1]=="May") currMonth = 5;
   else if(currDateTime[1]=="Jun") currMonth = 6;
   else if(currDateTime[1]=="Jul") currMonth = 7;
   else if(currDateTime[1]=="Aug") currMonth = 8;
   else if(currDateTime[1]=="Sep") currMonth = 9;
   else if(currDateTime[1]=="Oct") currMonth = 10;
   else if(currDateTime[1]=="Nov") currMonth = 11;
   else if(currDateTime[1]=="Dec") currMonth = 12;

   return {currMonth, currYear}
}


const CalendarMonthInfo = ({children}) => {
   let year = todayDateTime().currYear
   let month = todayDateTime().currMonth

   const  [spaceDateMonthInfo, setSpaceDateMonthInfo] = useState(monthInfo(year, month));
   const data = {spaceDateMonthInfo,  setSpaceDateMonthInfo, monthInfo};

   return (
      <CalendarMonthContext.Provider value={data}>
         {children}
      </CalendarMonthContext.Provider>
   );
};

export {CalendarMonthContext}
export default CalendarMonthInfo;
