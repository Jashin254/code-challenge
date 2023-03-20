
var name = prompt("what is your name");
console.log(name)
var Marks = prompt("what is your score")
console.log(Marks)
//Grading scheme (A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.) 
    if (Marks >79 && Marks <=100 ) 
    // {return [name]+" "+"your grade is:"+"A"}
    {console.log( name +" your grade is A") }

        else if(Marks >= 60 && Marks <79) 
        //{return [name]+" "+"your grade is:"+"B"}
        {console.log(name +" your grade is B") }
        
        else if (Marks >= 49 && Marks <59) 
            //{return [name]+" "+"your grade is:"+"C"}
            {console.log(name +" your grade is C") }
            
            else if (Marks >= 40 && Marks <49) 
                //{return [name]+" "+"your grade is:"+"D"}
                {console.log(name +" your grade is D") }
                
                else if  (Marks <40 && Marks >0) 
                    //{return [name]+" "+"your grade is:"+"E"}
                    {console.log(name +" your grade is E") }
                        else if (Marks >=101 && Marks <0)
                        {console.log("error Marks have to score has to be between 0 and 100")}

