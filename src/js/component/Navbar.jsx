import React from "react";

export const Navbar = () => {
    const items = {
        title: "Start Bootstrap",
        home: "Home",
        about: "About",
        services: "Services",
        contact: "Contact"
    }

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">{items.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse text-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">{items.home}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{items.about}</a>
                    </li>
      Nav              <li className="nav-item">
                        <a className="nav-link" href="#">{items.services}</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">{items.contact}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}