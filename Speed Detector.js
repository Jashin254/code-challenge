// prompt the user to input drivers speed
var speed = prompt("Input speed")
    if(speed <70)
    {console.log(ok)}
// calculate the demerit points as an integer(rounding off is the the next number not closest)
            var demeritpoints = Math.ceil((speed-70)/5)
            {console.log("you have: "+demeritpoints+"demaeritpoints")}

        if (demeritpoints >12){
        console.log( "License_Suspended")
    }