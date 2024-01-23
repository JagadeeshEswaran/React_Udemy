/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { NavLink } from "react-router-dom";

const App_Cards = ({ data }) => {
	return (
		<div className="row gap-2 p-0 w-100 d-flex justify-content-start align-items-center">
			{data.map((item) => (
				// console.log(item)
				<NavLink
					to={item.link}
					className="card col-md-4 p-0 m-0 d-flex justify-content-center align-items-center txtClr"
					style={{
						width: "30%",
						// margin: "20px",
						height: "100px",
						cursor: "pointer",
					}}
					key={item.id}>
					<h5>{item.name}</h5>
				</NavLink>
			))}
		</div>
	);
};

export default App_Cards;
