import React from 'react';

const Images = (props) =>{
    return <img className="card-img-top" src={props.imgsrc} alt="image" style={{height:'200px'}}/>
};

export default Images;