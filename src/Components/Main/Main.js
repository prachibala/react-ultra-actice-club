import React, { useEffect, useState } from "react";
import "./Main.css";
import "../../fakedata/items.json";
import Item from "../Item";

const Main = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("items.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className="main">
            <div className="main-left">
                {items.map((item) => console.log(item))}
                {items.map((item) => (
                    <Item item={item} key={item.id}></Item>
                ))}
            </div>
            <div className="main-right">right</div>
        </div>
    );
};

export default Main;
