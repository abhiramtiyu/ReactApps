import React, { useState } from "react";
import { FaRegPlusSquare, FaRegMinusSquare } from "react-icons/fa";
const Accordian = ({ title, info }) => {
    const [showInfo, closeInfo] = useState(false);
    const openInfo = (showInfo) => {

    }
    return <article className="question">
        <header>
            <h4>{title}</h4>
            <button className="btn" onClick={()=>{closeInfo(!showInfo)}}>
            {showInfo ? <FaRegMinusSquare /> : <FaRegPlusSquare />}
            </button>
        </header>
            {showInfo && <p>{info}</p>}
    </article>
        }
export default Accordian;