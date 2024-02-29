/* eslint-disable no-unused-vars */
import React from "react";
import Search_Form from "./Search_Form";
import Theme_Toggle from "./Theme_Toggle";
import { useUnsplashContext } from "../context";

const Navbar = () => {
	return (
		<main className="d-flex align-items-center justify-content-between px-4 h-100">
			<section className="fs fs-3 fw-bold">
				Unsplash<span className="text-warning fs-1 fw-bolder m-0 p-0">.</span>
				Me_
			</section>

			<section>
				<Theme_Toggle />
			</section>
		</main>
	);
};

export default Navbar;
