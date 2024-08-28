import React from "react";

export const Footer = () => {
    const items = {
        title: "Copyright Year Website 2019"
    }

    return (
        <div class="bg-dark text-white text-center">
            <div class="container p-4 text-center">
                <div class="row">
                    <p className="mx-auto"> {items.title} </p>
                </div>
            </div>
        </div>
    )
}