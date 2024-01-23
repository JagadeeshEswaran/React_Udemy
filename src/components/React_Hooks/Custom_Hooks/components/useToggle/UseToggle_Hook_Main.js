/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Side_bar from "../../../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../../../App_Components/Page_Components/Side_notes";
import { custom_hooks } from "../../data";
import useToggle from "./Use_Toggle";

const Custom_Hooks_Main = () => {
	const [hide, setHide] = useState(true);
	const [contentShow, setContentShow] = useState("You can see the content..!!");

	// useToggle Custom Hook
	const { show, hideItem } = useToggle(true);

	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar data={custom_hooks.hooks_list} />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">useToggle Hooks</h5>
					</div>

					{/* Instead of using useState Hook to toggle the state values, We're going to Create a new Hook called useToggle and going to use it for Toggle functionality */}

					<div className="card d-flex flex-column justify-content-center align-items-center w-100 px-5 txtClr py-3">
						<h5>Toggler Function - With useState hook</h5>
						<button className="btn btn-info" onClick={() => setHide(!hide)}>
							Show Toggle
						</button>

						{!hide && (
							<section className="card py-4 px-2 my-3 txtClr">
								<p className="p-0 m-0">{contentShow}</p>
							</section>
						)}
					</div>

					<div className="card d-flex flex-column justify-content-center align-items-center w-100 px-5 txtClr py-3 my-2">
						<h5>Toggler Function - With useToggle Custom hook</h5>
						<button className="btn btn-info" onClick={() => hideItem(!show)}>
							Show Toggle
						</button>

						{show && (
							<section className="card py-4 px-2 my-3 txtClr">
								<p className="p-0 m-0">{contentShow}</p>
							</section>
						)}
					</div>
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default Custom_Hooks_Main;
