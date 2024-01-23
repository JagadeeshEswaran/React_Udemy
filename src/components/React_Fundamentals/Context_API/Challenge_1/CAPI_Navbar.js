import React from "react";
import NavBar from "./NavBar";

function CAPI_Navbar_1() {
	return (
		<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
			<h6 className="my-2 txtClr">Challenge 1 - Navbar using Prop-drilling</h6>

			<NavBar />
		</div>
	);
}

export default CAPI_Navbar_1;
