import React from "react";
import Favthing,{yourFav,name,myName} from './Importpara'
function App(){
    return(
        <>
        <h1>what is my favourite channel {Favthing}</h1>

        {yourFav}
        {name()}{myName()} 
        </>
    )
}
export default App;