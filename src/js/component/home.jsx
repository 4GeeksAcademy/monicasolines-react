import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Navbar } from "./Navbar";
import { Card } from "./Card";
import { Jumbotron } from "./Jumbotron";
import { Footer } from "./Footer";

//create your first component
const Home = () => {
	return (

		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center">
					<Card />
			</div >
			<h1 className="text-center mt-5">Hello Rigo!</h1>
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<Footer />
		</div>
	);
};

export default Home;
