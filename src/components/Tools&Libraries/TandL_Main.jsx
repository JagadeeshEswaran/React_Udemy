import React from "react";
import Side_bar from "../App_Components/Page_Components/Side_bar";
import Section_cards from "../../React_Micro_Projects/01_Birthday_Reminder/Section_cards";
import Side_notes from "../App_Components/Page_Components/Side_notes";
import { Side_bar_Data } from "../../data/BestBooks/App_component_data";

const TandL_Main = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={Side_bar_Data} />

				{/* Main Section Column of 8 portions */}
				<div className="container col-8 d-flex flex-column align-items-center">
					<div className="card col-1 d-flex flex-column align-items-center w-100">
						<h5 className="my-2 txtClr">React Micro Projects</h5>
					</div>

					<Section_cards data={Side_bar_Data[3].sub_secition} />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default TandL_Main;
