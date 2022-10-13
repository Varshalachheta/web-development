console.log("page of date and time");
/// show the current date and time  ///
let now = new Date();
console.log(now);

/// show the date and time where it is taken reference///
let zero = new Date(0);
console.log(zero);

/// show the date and time of given year ///
let newDate = new Date("2024-02-26")
console.log(newDate);

/// new Date(year, month, date, hours, minutes, seconds, milliseconds) /// 
 let eg = new Date (3020 , 4 , 6 , );
 console.log (eg);

 let yr = eg.getFullYear();
 console.log("the year is " , yr);

 let dt = eg.getDate();
 console.log("the date is " , dt);

 let month = eg.getMonth();
 console.log("the month is ", month);