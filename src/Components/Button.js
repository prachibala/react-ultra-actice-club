import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Button.css";
const Button = () => {
    const notify = () =>
        toast.success("Your task completed", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    return (
        <div>
            <button onClick={notify} className="activityBtn mt">
                Activity Completed
            </button>
            <ToastContainer />
        </div>
    );
};

export default Button;
