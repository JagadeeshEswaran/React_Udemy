import React from "react";

import Section_cards from "./01_Birthday_Reminder/Section_cards";
import { Micro_App_Data } from "../data/BestBooks/App_component_data";
import Side_bar from "../components/App_Components/Page_Components/Side_bar";
import Side_notes from "../components/App_Components/Page_Components/Side_notes";

const Micro_Apps_Main = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={Micro_App_Data} />

				{/* Main Section Column of 8 portions */}
				<div className="container col-8 d-flex flex-column align-items-center">
					<div className="card col-1 d-flex flex-column align-items-center w-100">
						<h5 className="my-2 txtClr">React Micro Projects</h5>
					</div>

					<Section_cards data={Micro_App_Data} />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default Micro_Apps_Main;
