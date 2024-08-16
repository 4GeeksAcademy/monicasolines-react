import React from "react";

export const Footer = () => {
    const items = {
        title: "Copyright Year Website 2019"
    }

    return (
        <div class="bg-dark text-white text-center">
            <div class="container p-4">
                <div class="row">
                    <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <p> {items.title} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}