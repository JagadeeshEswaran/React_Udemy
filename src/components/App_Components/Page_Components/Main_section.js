import React from "react";
import Side_bar from "./Side_bar";
import {
	Navbar_Data,
	Side_bar_Data,
} from "../../../data/BestBooks/App_component_data";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Main_section = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={Navbar_Data} />

				<div
					className="col-8 p-0 d-flex flex-column align-items-center"
					style={{ height: "87vh" }}>
					<div className="container row d-flex justify-content-between">
						{Side_bar_Data.map((item) =>
							item.name !== "Exotic Landscapes" ? (
								<div
									className="card col-4 h-50 py-2 text-decoration-none mb-2 mr-2 d-flex justify-content-center"
									style={{ width: "33%" }}
									key={item.id}>
									<Link to={item.link} className="text-decoration-none">
										<div className=" h-100 text-center text-primary-emphasis fw-medium txtClr">
											{item.name}
										</div>
									</Link>
								</div>
							) : (
								<div
									className="card col-4 h-50 py-2 text-decoration-none mb-2 mr-2 d-flex justify-content-center"
									style={{ width: "33%" }}
									key={item.id}>
									<a
										href="https://exotic-landscapes.netlify.app/"
										target="_blank"
										rel="noreferrer"
										className="text-decoration-none">
										<div className=" h-100 text-center text-primary-emphasis fw-medium txtClr d-flex justify-content-between align-items-center">
											{item.name}
											<div className="card">
												<img
													src="../../../assets/Exotic_Landscapes_Thumb.png"
													alt="Exotic Landscapes"
													width={120}
													height={80}
												/>
											</div>
										</div>
									</a>
								</div>
							)
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Main_section;
