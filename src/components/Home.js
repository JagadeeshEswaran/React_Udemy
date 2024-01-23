import React from "react";
import Navbar from "./App_Components/Navbar_Comps/Navbar";
import Footer from "./App_Components/Footer_Components/Footer";

import Page_Components from "../components/App_Components/Page_Components/Page_Components";

export default function Home() {
	return (
		<div className="d-flex flex-column h-100">
			<div
				className="shadow p-1 fixed-top navbar d-flex flex-lg-row flex-column justify-content-center rounded-bottom-3 rounded-top-0"
				style={{
					height: "7vh",
				}}>
				{/* NavBar Comes here */}
				<Navbar />
			</div>

			<div>
				{/* Page Components */}
				<Page_Components />
			</div>

			<div>
				{/* Footer Comes here */}
				<Footer />
			</div>
		</div>
	);
}
