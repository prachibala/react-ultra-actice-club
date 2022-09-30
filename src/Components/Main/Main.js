import React, { useEffect, useState } from "react";
import "./Main.css";
import "../../fakedata/items.json";
import Item from "../Item";
import user from "../../Images/pic-1.png";
import Button from "../Button";

const Main = () => {
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState(0);
    const [breakTime, setBreakTime] = useState(
        localStorage.getItem("BreakTime") || 0
    );
    const [sidebar, setSidebar] = useState(false);

    const burgerOpenHandle = () => {
        setSidebar(true);
    };

    const burgerCloseHandle = () => {
        setSidebar(false);
    };

    const btnHandle = (item) => {
        setSelectedItems(selectedItems + item);
    };

    const breakHandle = (time) => {
        setBreakTime(time);

        localStorage.setItem("BreakTime", time);
    };

    useEffect(() => {
        fetch("items.json")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);
    return (
        <>
            <button className="burgerBtn" onClick={burgerOpenHandle}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zm0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1zM3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1z" />
                </svg>
            </button>

            {/* mobile side bar */}
            {sidebar && (
                <div className="sidebar">
                    <button className="btnClose" onClick={burgerCloseHandle}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="24px"
                            viewBox="0 0 24 24"
                            width="24px"
                            fill="#000000"
                        >
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z" />
                        </svg>
                    </button>

                    <div className="d-flex align-items-center ">
                        <img src={user} alt="" />
                        <div className="ms-3 mt-3">
                            <p className="fw-semibold fs-5 mb-0">
                                Justin Jacob
                            </p>
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
                    <p className="fw-semibold fs-6 mb-4 m">
                        Activities Details
                    </p>

                    <div className="userActivities">
                        <div className="d-flex align-items-center  justify-content-around userInfo">
                            <p className="mb-0">Activities Time</p>
                            <p className="mb-0">
                                {selectedItems}
                                <span>
                                    <small>m</small>
                                </span>
                            </p>
                        </div>
                        <div className="d-flex align-items-center  justify-content-around userInfo mt-3">
                            <p className="mb-0">Break Time</p>
                            <p className="mb-0">
                                {breakTime}
                                <span>
                                    <small>m</small>
                                </span>
                            </p>
                        </div>
                    </div>
                    <Button></Button>
                </div>
            )}

            <div className="main ">
                <div className="main-left">
                    <h2>Daily-Learning</h2>
                    <p className="fw-semibold fs-5 main-left-sub-header ">
                        Select today’s course activities
                    </p>
                    <div className="gy-4 row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
                        {items.map((item) => (
                            <Item
                                item={item}
                                key={item.id}
                                btnHandle={btnHandle}
                            ></Item>
                        ))}
                    </div>
                </div>

                <div className="main-right">
                    <div className="d-flex align-items-center ">
                        <img src={user} alt="" />
                        <div className="ms-3 mt-3">
                            <p className="fw-semibold fs-5 mb-0">
                                Justin Jacob
                            </p>
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
                    <p className="fw-semibold fs-6 mb-4 m">
                        Activities Details
                    </p>

                    <div className="userActivities">
                        <div className="d-flex align-items-center  justify-content-around userInfo">
                            <p className="mb-0">Activities Time</p>
                            <p className="mb-0">
                                {selectedItems}
                                <span>
                                    <small>m</small>
                                </span>
                            </p>
                        </div>
                        <div className="d-flex align-items-center  justify-content-around userInfo mt-3">
                            <p className="mb-0">Break Time</p>
                            <p className="mb-0">
                                {breakTime}
                                <span>
                                    <small>m</small>
                                </span>
                            </p>
                        </div>
                    </div>
                    <Button></Button>
                </div>
            </div>
        </>
    );
};

export default Main;
