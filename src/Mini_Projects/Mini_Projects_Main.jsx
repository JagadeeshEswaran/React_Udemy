/* eslint-disable no-unused-vars */
import React from "react";

import { Mini_Projects } from "../data/BestBooks/App_component_data";
import Side_bar from "../components/App_Components/Page_Components/Side_bar";
import Side_notes from "../components/App_Components/Page_Components/Side_notes";
import Cards_Container from "../components/utils/Project_Listing_Cards/Cards_Container";

const Mini_Projects_Main = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={Mini_Projects} />

				{/* Main Section Column of 8 portions */}
				<div
					className="container col-8 d-flex flex-column align-items-center"
					style={{
						height: "86vh",
					}}>
					<div className="card col-1 d-flex flex-column align-items-center w-100">
						<h5 className="my-2 txtClr">React Mini Projects</h5>
					</div>

					<Cards_Container />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default Mini_Projects_Main;
