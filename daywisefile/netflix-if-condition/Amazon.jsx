import React from "react";
import Card from "./Cards";
import sdata from "./Sdata";

const Amazon = () =>{
    return (<Card 
        key={sdata[3].id}
        imgsrc={sdata[3].imgsrc}
        title={sdata[3].title}
        sname={sdata[3].sname}
link={sdata[0].link}/> );
}
export default Amazon;
