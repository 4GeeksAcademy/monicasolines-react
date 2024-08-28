import React from "react";


export const Jumbotron = () => {

    const items = {
        title: "Custom jumbotron",
        description: "Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.",
        buttonLabel: "Click to Action"
    }

    return (
        <div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5 text-center">
                <h1 className="display-5 fw-bold">{items.title} </h1>
                <p className="col-md-8 fs-4 mx-auto">{items.description}</p>
                <button className="btn btn-primary btn-lg" type="button">{items.buttonLabel}</button>
            </div>
        </div>
    )
}