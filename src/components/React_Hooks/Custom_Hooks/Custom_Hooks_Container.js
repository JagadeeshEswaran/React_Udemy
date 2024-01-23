import React from "react";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import App_Cards from "./App_Card";
import { custom_hooks } from "./data";
import UseToggle_Hook_Main from "./components/useToggle/UseToggle_Hook_Main";

const Custom_Hooks_Main = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar data={custom_hooks.hooks_list} />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">Custom Hooks</h5>
					</div>

					<UseToggle_Hook_Main />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default Custom_Hooks_Main;
