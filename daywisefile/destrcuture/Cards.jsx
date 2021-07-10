import React from "react";
import Images from './Images';
function Card(props){
   return  <div className="col"> <div className="card">
    <Images imgsrc={props.imgsrc}/>
    <div className="card-body">
    <h4 className="card-title">{props.title}</h4>
    <p className="card-text">{props.sname}</p>
    <a href={props.link} target="blank" className="btn btn-primary">See Profile</a>
    </div></div>
</div>
}
export default Card;