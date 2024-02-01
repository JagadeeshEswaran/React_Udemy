/* eslint-disable no-unused-vars */
import React from "react";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import App_Perf_Container from "./App_Perf_Container";
import RF_Cards from "../RF_Cards";
import {
	RF_Data,
	Side_bar_Data,
} from "../../../data/BestBooks/App_component_data";

const Performance_Main = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar data={Side_bar_Data[0].sub_secition} />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">Performance of React App</h5>
					</div>

					<RF_Cards data={RF_Data[2]?.topics} />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default Performance_Main;
