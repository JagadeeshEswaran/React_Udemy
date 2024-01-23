import React from "react";
import Name_List from "./Name_List";
import Show_Hobby from "./Show_Hobby";
import Gotcha_useState from "./Gotcha_useState";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import { React_Hooks } from "../../../data/BestBooks/App_component_data";
import Side_notes from "../../App_Components/Page_Components/Side_notes";

const UseState_Hooks = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh", marginTop: "8vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={React_Hooks[0]?.tasks} />

				<div
					className="col-8 container-fluid d-flex justify-content-center flex-column"
					style={{ paddingBottom: "6vh" }}>
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">useState Hook</h5>
					</div>

					<Name_List />
					<Show_Hobby />
					<Gotcha_useState />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default UseState_Hooks;
