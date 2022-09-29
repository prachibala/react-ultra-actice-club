import React from "react";

const Blogs = () => {
    return (
        <div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            How does React work?
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                This is the first item's accordion body.
                            </strong>
                            ReactJS divides the UI into isolated reusable pieces
                            of code known as components. React components work
                            similarly to JavaScript functions as they accept
                            arbitrary inputs called properties or props. It's
                            possible to have as many components as necessary
                            without cluttering your code.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            difference between props and state?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <strong>
                                This is the second item's accordion body.
                            </strong>
                            Props are used to pass data from one component to
                            another. The state is a local data storage that is
                            local to the component only and cannot be passed to
                            other components. The this.setState property is used
                            to update the state values in the component.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
