/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const Side_bar = ({ data }) => {
	// console.log(data);

	return (
		<div
			className="card col-2 d-flex flex-column align-items-center justify-content-start bg-gradient sideBar"
			style={{
				height: "86vh",
			}}>
			<ul className="p-0">
				{data.map((item) => (
					<li
						className="py-4 fw-bold text-primary-emphasis cursor-pointer"
						key={item.id}>
						<NavLink to={item.link} className="txtClr text-decoration-none">
							{item?.name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Side_bar;
