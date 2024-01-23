/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Puff } from "react-loading-icons";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import { React_Hooks } from "../../../data/BestBooks/App_component_data";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import Container from "./Container";
import { useRef_Notes } from "../../../data/Side_Note_Data";

export default function UseRef_Hook_Main() {
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
						<h5 className="my-2 txtClr">React Hooks - useRef Hook</h5>
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
									<h5 className="py-2 txtClr w-100 mb-2  ">
										In React, the useRef hook is used to create a{" "}
										<span className="text-warning">mutable object </span>
										called a "ref." Refs are primarily used to{" "}
										<span className="text-warning">persist values </span> across
										renders{" "}
										<span className="text-warning">
											without causing re-renders
										</span>
										. Unlike state variables, changes to a ref don't trigger a
										re-render of the component.
									</h5>
								</div>

								<Container />
							</>
						)}
					</div>
				</div>

				<Side_notes notes={useRef_Notes} />
			</div>
		</>
	);
}
