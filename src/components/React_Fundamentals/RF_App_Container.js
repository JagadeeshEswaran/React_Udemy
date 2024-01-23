import React from "react";

import Side_bar from "../App_Components/Page_Components/Side_bar";
import {
	RF_Data,
	Side_bar_Data,
} from "../../data/BestBooks/App_component_data";
import Side_notes from "../App_Components/Page_Components/Side_notes";
import RF_Cards from "./RF_Cards";

const RF_App_Container = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar data={Side_bar_Data[0].sub_secition} />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">React Fundamentals</h5>
					</div>

					<RF_Cards data={RF_Data} />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default RF_App_Container;
