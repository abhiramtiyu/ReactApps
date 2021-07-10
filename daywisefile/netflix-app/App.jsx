import React from "react";
import Card from "./Cards"
import sdata from "./Sdata";

const App = () =>(
    <>
        <h1 className="text-center">Top NETFLIX series</h1>
        <div className="container">
        <div className="row">
        {sdata.map((cvalue,index) =>{  
          return <Card 
          key={cvalue.id}
          imgsrc={cvalue.imgsrc}
          title={cvalue.title}
          sname={cvalue.sname}
          link={cvalue.link}/>  
        })}        
        </div>
        </div>
    </>
);
export default App;