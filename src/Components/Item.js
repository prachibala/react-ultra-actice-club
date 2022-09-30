import React from "react";
import "./Item.css";
const Item = (props) => {
    const { img, title, time, body } = props.item;
    return (
        <div className="col p-4">
            {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                <div className="col">
                    <div className="card h-100 items">
                        <img src={img} className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{body}</p>
                            <p>
                                <small className="fw-semibold">
                                    Time required :{time}m
                                </small>
                            </p>
                            <button className=" btnAdd">Add to list</button>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="item">
                <img src={img} alt="" />
                <h5 className="title">{title}</h5>
                <p>{body}</p>
                <p>
                    <small className="fw-semibold">
                        Time required :{time}m
                    </small>
                </p>
                <button
                    className=" btnAdd"
                    onClick={() => props.btnHandle(props.item.time)}
                >
                    Add to list
                </button>
            </div>
        </div>
    );
};

export default Item;
