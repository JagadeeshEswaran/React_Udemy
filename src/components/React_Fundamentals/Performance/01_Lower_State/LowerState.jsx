import React from "react";
import App from "./App";
import App2 from "./Solutions/App";
import Side_bar from "../../../App_Components/Page_Components/Side_bar";
import { Side_bar_Data } from "../../../../data/BestBooks/App_component_data";
import Side_notes from "../../../App_Components/Page_Components/Side_notes";
import App_Challenge from "./Challenge/App_Challenge";

const LowerState = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar data={Side_bar_Data[0].sub_secition} />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<main
						className="card col-1 d-flex flex-column align-items-center w-100 mb-2 txtClr"
						style={{ height: "45vh" }}>
						<section className="py-3">
							<h5>Lower the State or Move State Down</h5>
						</section>

						<article className="d-flex justify-component-between gap-5">
							<App />
							<App2 />
						</article>
					</main>
					<App_Challenge />
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default LowerState;
