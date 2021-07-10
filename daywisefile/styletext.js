import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
const nameP = "Abhiram Tiyu";
const imageNew = "https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68";
const imageNew1 = "https://i.picsum.photos/id/1001/5616/3744.jpg?hmac=38lkvX7tHXmlNbI0HzZbtkJ6_wpWyqvkX4Ty6vYElZE";
const imageNew2 = "https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ";
const myLink = "https://picsum.photos/images";
const headingCss = {
    color:'cyan',
    textAlign: 'center',
    background: '#333',
    padding: '15px',
    borderRadius: '5px'
}
ReactDOM.render(
    <>
    <h1 contentEditable="true" style={headingCss}>My name is {nameP}</h1>
    <div className="imagesdivs">
    <img src={imageNew} className="imgsection" alt="doggie images"/>
    <img src={imageNew1} className="imgsection" alt="doggie images"/>
    <a href={myLink} target="blank">
    <img src={imageNew2} className="imgsection" alt="doggie images"/>
    </a>
    </div>
    </>,
    document.getElementById('root')
)