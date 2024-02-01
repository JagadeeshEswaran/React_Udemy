import React from "react";
import Side_bar from "../../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../../App_Components/Page_Components/Side_notes";
import UseCallback_Hook_Container from "./UseCallback_Hook_Container";

const UseCallback_Hook_Main = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<main className="card col-1 d-flex flex-column align-items-center w-100 mb-2 txtClr">
						<section className="py-3">
							<h5>useCallback Hook</h5>
						</section>
					</main>

					<UseCallback_Hook_Container />
				</div>
				<Side_notes />
			</div>
		</>
	);
};

export default UseCallback_Hook_Main;
