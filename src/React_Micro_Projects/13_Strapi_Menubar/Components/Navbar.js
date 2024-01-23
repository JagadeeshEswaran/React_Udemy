/* eslint-disable no-unused-vars */
import React from "react";
import { FaBars } from "react-icons/fa";
import { useStrapiContext } from "../StrapiContext";
import NavLinks from "./NavLinks";

function Navbar() {
	const { showSubmenu, handleSubmenu } = useStrapiContext();
	const { pageId, setPageId } = useStrapiContext();

	// console.log(showSubmenu);

	const handleNavLink = (e) => {
		console.log(!e.target.classList.contains("scrapi-nav-link"));

		if (!e.target.classList.contains("scrapi-nav-link")) {
			setPageId(null);
		}
	};

	return (
		<main className="strapi-navbar txtClr" onMouseOver={handleNavLink}>
			<div className="h1-container">
				<h4 className="logo">Strapi</h4>
			</div>

			{/* Navbar Links comes here */}
			<NavLinks />

			{!showSubmenu ? (
				<button className="toggle-btn" onClick={handleSubmenu}>
					<FaBars />
				</button>
			) : null}
		</main>
	);
}

export default Navbar;
