import "./Card.css";
import React from "react";

function Card(props){
    const classe = 'card' + props.className;
    return <div className={classe}>{props.children}</div>;
}


export default Card;