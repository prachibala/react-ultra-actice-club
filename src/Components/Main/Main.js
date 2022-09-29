import React, { useEffect, useState } from "react";
import "./Main.css";
import "../../fakedata/items.json";
import Item from "../Item";
import user from "../../Images/pic-1.png";

const Main = () => {
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState(0);
    const [breakTime, setBreakTime] = useState(0);

    const btnHandle = (item) => {
        setSelectedItems(selectedItems + item);
    };

    const breakHandle = (time) => {
        setBreakTime(time);
    };

    useEffect(() => {
        fetch("items.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <div className="main">
            <div className="main-left">
                {items.map((item) => (
                    <Item
                        item={item}
                        key={item.id}
                        btnHandle={btnHandle}
                    ></Item>
                ))}
            </div>
            <div className="main-right">
                <div className="d-flex align-items-center ">
                    <img src={user} alt="" />
                    <div className="ms-3 mt-3">
                        <p className="fw-semibold fs-5 mb-0">Justin Jacob</p>
                        <p>
                            <small> Sydney, Australia</small>
                        </p>
                    </div>
                </div>

                <div className="userInfo d-flex align-items-center  justify-content-around">
                    <div>
                        <p className="fw-bold mb-1">
                            60
                            <span>
                                <small>kg</small>
                            </span>
                        </p>
                        <p className="mb-0">Weight</p>
                    </div>
                    <div>
                        <p className="fw-bold mb-1">5'6</p>
                        <p className="mb-0">Height</p>
                    </div>
                    <div>
                        <p className="fw-bold mb-1">
                            24 <small>Yrs</small>
                        </p>
                        <p className="mb-0">Age</p>
                    </div>
                </div>

                <p className="fw-semibold fs-6 mb-4 m">Add A Break</p>

                <div className="break d-flex align-items-center  justify-content-around userInfo">
                    <button
                        onClick={() => breakHandle(10)}
                        className="breakTime "
                    >
                        <p className="mb-0 fw-semibold">
                            10<small>m</small>
                        </p>
                    </button>
                    <button
                        onClick={() => breakHandle(20)}
                        className="breakTime"
                    >
                        <p className="mb-0 fw-semibold">
                            20<small>m</small>
                        </p>
                    </button>
                    <button
                        onClick={() => breakHandle(30)}
                        className="breakTime"
                    >
                        <p className="mb-0 fw-semibold">
                            30<small>m</small>
                        </p>
                    </button>
                    <button
                        onClick={() => breakHandle(40)}
                        className="breakTime"
                    >
                        <p className="mb-0 fw-semibold">
                            40<small>m</small>
                        </p>
                    </button>
                </div>
                <p className="fw-semibold fs-6 mb-4 m">Exercise Details</p>

                <div className="userActivities">
                    <div className="d-flex align-items-center  justify-content-around userInfo">
                        <p className="mb-0">Exercise Details</p>
                        <p className="mb-0">
                            {selectedItems}
                            <span>
                                <small>m</small>
                            </span>
                        </p>
                    </div>
                    <div className="d-flex align-items-center  justify-content-around userInfo mt-3">
                        <p className="mb-0">Break time</p>
                        <p className="mb-0">
                            {breakTime}
                            <span>
                                <small>m</small>
                            </span>
                        </p>
                    </div>
                </div>
                <button className="activityBtn mt">Activity Completed</button>
            </div>
        </div>
    );
};

export default Main;
