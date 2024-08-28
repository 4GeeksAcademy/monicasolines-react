import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";


export const Card = () => {

    const cardsData = [
        {
        title: "Card Title",
        imagen: {rigoImage},
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    },
    {
        title: "Card Title 2",
        imagen: {rigoImage},
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    },
    {
        title: "Card Title 3",
        imagen: {rigoImage},
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    },
    {
        title: "Card Title 4",
        imagen: {rigoImage},
        description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        buttonLabel: "Click here"
    }
]
    
    return (
        <div className="d-flex flex-wrap">
            {cardsData.map((item) => (
            <div className="card m-2" style={{width: "18rem"}}>
                <img src={rigoImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description}</p>
                    <a href="#" className="btn btn-primary">{item.buttonLabel}</a>
                </div>
            </div>
        </div>
        ))}
        

