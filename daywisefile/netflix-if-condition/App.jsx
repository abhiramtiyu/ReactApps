import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

let favourite = "Vampire";
const Favs = () =>{
    if(favourite === "notVampire"){
        return <Netflix/> 
    }
    else{
        return <Amazon/>
    }
}

const App = () =>(
    <>
        <h1 className="text-center">Top NETFLIX series</h1>
        <div className="container">
        <div className="row">
              <Favs/>  
        </div>
        </div>
    </>
);
export default App;