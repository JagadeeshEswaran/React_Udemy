import React from "react";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import { Axios_Notes } from "../../../data/Side_Note_Data";
import Axios_Container from "./Examples/Axios_Container";

const Axios_Main = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar />

				{/* Main Section Column of 8 portions */}
				<div className="container col-8 d-flex flex-column align-items-center">
					<div className="card col-1 d-flex gap-3 flex-row justify-content-center align-items-center w-100">
						<div className="border rounded-circle p-2 m-2">
							<img
								src="https://www.vectorlogo.zone/logos/axios/axios-icon.svg"
								alt=""
								width={30}
								height={30}
							/>
						</div>
						<h5 className="my-2 txtClr">Axios Tutorials</h5>
					</div>
					<Axios_Container />
				</div>

				<Side_notes notes={Axios_Notes} />
			</div>
		</>
	);
};

export default Axios_Main;
