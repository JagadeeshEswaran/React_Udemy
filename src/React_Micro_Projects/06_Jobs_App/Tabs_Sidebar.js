/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Tabs_Sidebar({ data, showJobSetter }) {
	return (
		<div className="txtClr col-3 border-end border-info me-3">
			{data.map((item) => (
				<button
					onClick={(e) => showJobSetter(e.target.id)}
					key={item.id}
					id={item.id}
					className="my-3 cursor-pointer btn btn-dark">
					{item.title}
				</button>
			))}
		</div>
	);
}
