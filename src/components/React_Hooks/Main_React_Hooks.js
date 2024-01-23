import React from "react";
import Hooks_Cards from "./Hooks_Cards";

import Side_bar from "../App_Components/Page_Components/Side_bar";
import { React_Hooks } from "../../data/BestBooks/App_component_data";
import Side_notes from "../App_Components/Page_Components/Side_notes";

const Main_React_Hooks = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar data={React_Hooks[1]?.tasks} />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">React Hooks</h5>
					</div>

					<Hooks_Cards />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default Main_React_Hooks;
