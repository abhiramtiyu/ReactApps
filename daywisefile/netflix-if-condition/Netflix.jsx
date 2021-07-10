import React from "react";
import Card from "./Cards";
import sdata from "./Sdata"
const Netflix = () =>{
    return (<Card 
              key={sdata[0].id}
              imgsrc={sdata[0].imgsrc}
              title={sdata[0].title}
              sname={sdata[0].sname}
    link={sdata[0].link}/> );
}
export default Netflix;