/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import { React_Hooks } from "../../../data/BestBooks/App_component_data";
import { Puff } from "react-loading-icons";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import { useRef_Notes } from "../../../data/Side_Note_Data";
import UseReducer_Container from "./UseReducer_Container";

export default function UseReducer_Hook_Main() {
	const [loading, setLoading] = useState(true);
	// const [tours, setTours] = useState([]);

	const resetData = () => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={React_Hooks} />

				{/* Main Section Column of 8 portions */}
				<div
					className="container col-8 d-flex flex-column align-items-center"
					style={{ paddingBottom: "6vh" }}>
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2 bg-gradient">
						<h5 className="my-2 txtClr">React Hooks - useReducer Hook</h5>
					</div>

					<div
						className=" col-1 d-flex flex-column justify-content-start align-items-center w-100"
						// style={{ height: "auto", minHeight: "81vh" }}
					>
						{loading ? (
							<>
								<div className="my-4">
									<Puff />
								</div>
							</>
						) : (
							<>
								<div className="card d-flex justify-content-center align-items-center w-100 px-5 mb-2">
									<p className="py-2 txtClr w-100 mb-2  ">
										In React, the useReducer hook is a{" "}
										<span className="text-warning">
											lite Version of REDUX.{" "}
										</span>
										As our App grows, its difficult to manage everything with
										useState{" "}
										<span className="text-warning">
											useReducer allows for custom state logic.{" "}
										</span>
										If we find outself keeping track of multiple pieces of state
										that rely on complex logic,{" "}
										<span className="text-warning">
											useReducer is a useful tool.
										</span>
									</p>
								</div>

								<UseReducer_Container />
							</>
						)}
					</div>
				</div>

				<Side_notes notes={useRef_Notes} />
			</div>
		</>
	);
}
