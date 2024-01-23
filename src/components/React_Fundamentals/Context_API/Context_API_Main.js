import React from "react";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import { RF_Data } from "../../../data/BestBooks/App_component_data";
import CAPI_Navbar_1 from "./Challenge_1/CAPI_Navbar";
import CAPI_Navbar_2 from "./Solution_1/CAPI_Navbar";
import { context_api_Notes } from "../../../data/Side_Note_Data";
import CAPI_Navbar_3 from "./Sol_Custom_Hook/CAPI_Navbar";

const Context_API_Main = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh", marginTop: "8vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={RF_Data} />

				<div
					className="col-8 container-fluid d-flex justify-content-top flex-column"
					style={{ paddingBottom: "6vh" }}>
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">Context API</h5>
					</div>

					<CAPI_Navbar_1 />
					<CAPI_Navbar_2 />
					<CAPI_Navbar_3 />
				</div>

				<Side_notes notes={context_api_Notes} />
			</div>
		</>
	);
};

export default Context_API_Main;
