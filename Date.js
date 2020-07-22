function getLastDateOfMonth(Year,Month){
   // return(new Date((new Date(Year, Month+1,1))-1));
   var date = new Date(Year,Month,0)
   return date.toDateString()
    }

    Date


    let d  = getLastDateOfMonth(2020,6)

    console.log(d);