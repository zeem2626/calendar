import { useState } from "react";

const CalendarMonthInfo2 = ({years, months}) => {
   let space;
   let numberOfDays;

   const leapYear = (year) => {
      let leap;
      if (year % 4 == 0) {
         if (year % 100 == 0 && year % 400 != 0) leap = 0;
         else leap = 1;
      } else leap = 0;
      return leap;
   };

   const daysInMonth = (year, month) => {
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
   };

   const spaceInMonth = (year, month) => {
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
   };

   spaceInMonth(years, months);
   daysInMonth(years, months);

//    return { space: Math.floor(space), numberOfDays:numberOfDays };
   return Math.floor(space);
};

const Func = () => {
   const [z, setZ] = useState(0);
   return {z, setZ}
};
export default CalendarMonthInfo2;
