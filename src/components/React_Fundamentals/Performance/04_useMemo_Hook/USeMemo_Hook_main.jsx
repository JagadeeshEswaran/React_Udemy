import React from "react";
import Side_bar from "../../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../../App_Components/Page_Components/Side_notes";
import UseMemo_Hook_Container from "./UseMemo_Hook_Container";

const USeMemo_Hook_main = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<main className="card col-1 d-flex flex-column align-items-center w-100 mb-2 txtClr">
						<section className="py-3">
							<h5>useMemo Hook</h5>
						</section>
					</main>

					<UseMemo_Hook_Container />
				</div>
				<Side_notes />
			</div>
		</>
	);
};

export default USeMemo_Hook_main;
