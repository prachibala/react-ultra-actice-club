import React from "react";
import "./Item.css";
const Item = (props) => {
    const { img, title, time, body } = props.item;
    return (
        <div className="item">
            <h1>Prachi</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Item;
