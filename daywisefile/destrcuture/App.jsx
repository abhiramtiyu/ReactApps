import React from "react";
import Netflix from "./Netflix";
import Amazon from "./Amazon";

let favourite = "notVampire";
const App = () =>(
    <>
        <h1 className="text-center">Top NETFLIX series</h1>
        <div className="container">
        <div className="row">
             {favourite === "notVampire" ? <Netflix/> : <Amazon/>}
             
        </div>
        </div>
    </>
);
export default App;