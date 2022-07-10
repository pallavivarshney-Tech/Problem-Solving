 
var Check_Leap = (year) => 
{
 
 var leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        return ("Leap Year")
    } else {
        return ("Non Leap Year")
    }



};
 
