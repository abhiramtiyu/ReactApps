import React from "react";
import reactDOM from "react-dom";
import "./index.css";
const Ndate = new Date();
const todayDate = Ndate.getFullYear()+"/"+Ndate.getMonth()+"/"+Ndate.getDate();
const nowTime = Ndate.getHours()+":"+Ndate.getMinutes()+":"+Ndate.getSeconds();
const currentDate = new Date().toLocaleDateString();
const currentTime = new Date().toLocaleTimeString();
reactDOM.render(
<>
   <h1>you can see current time and date</h1>
    <p>Today date is {todayDate}</p>
    <p>Current time is {nowTime}</p>
    {currentDate+currentTime}
</>,
document.getElementById("root"));