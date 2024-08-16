import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";

export const Card = () => {

    const items = {
        title: "Card Title",
        imagen: {rigoImage},
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    }
    
    return (
        <div className="card m-2" style={{width: "18rem"}}>
            <img src={rigoImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{items.title}</h5>
                    <p className="card-text">{items.description}</p>
                    <a href="#" className="btn btn-primary">{items.buttonLabel}</a>
                </div>
        </div>
    )
}