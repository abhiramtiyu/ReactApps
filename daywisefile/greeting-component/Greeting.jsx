import React from 'react';
function Greeting(){
let greeting = "";
let NewDate = new Date();
NewDate = NewDate.getHours();
const cssStyle = {};
if(NewDate >= 1 & NewDate <= 11){
    greeting = "good morning";
    cssStyle.color = "green";
}
else if(NewDate >= 12 & NewDate < 19){
    greeting = "good afternoon";
    cssStyle.color = "blue";
}
else
{
    greeting = "good Evening";
    cssStyle.color = "red";
}
    return(
        <> 
            <div className="imagesdivs">
                <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    )
}
export default Greeting;
