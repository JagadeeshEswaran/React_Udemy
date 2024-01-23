/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import Modal from "./components/Modal";

function App_Container() {
	return (
		<section
			className="txtClr w-100 h-100 p-1 d-flex justify-content-center align-items-center flex-column"
			style={{ position: "relative" }}>
			<Home />
			<article
				className="rounded m-2"
				style={{ position: "fixed", top: 5, left: 5 }}>
				<Sidebar />
			</article>
			<Modal />
		</section>
	);
}

export default App_Container;
