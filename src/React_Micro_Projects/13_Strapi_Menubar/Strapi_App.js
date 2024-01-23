/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Sidebar from "./Components/Sidebar";
import Submenu from "./Components/Submenu";
import "./../../styles/strapi.css";

export default function Strapi_App() {
	return (
		<div className="txtClr main_container">
			<Navbar />
			<Hero />
			<Sidebar />
			<Submenu />
		</div>
	);
}
