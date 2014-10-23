function countSundays(fromYear, toYear) {
    var year, month, firstOfMonth
      , numberOfSundays = 0
      ;
      
    for(year = fromYear; year < toYear; year++) {
        for(month = 1; month < 13; month++) {
            firstOfMonth = new Date(year, month, 1);
            if(firstOfMonth.getDay() === 0) {
                numberOfSundays += 1;
            }
        }
    }
    
    return numberOfSundays;
}

console.log("Number of first Sundays: " + countSundays(1901, 2001));
