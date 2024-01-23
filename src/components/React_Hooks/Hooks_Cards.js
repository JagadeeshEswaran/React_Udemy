import React from "react";
import { React_Hooks } from "../../data/BestBooks/App_component_data";
import { NavLink } from "react-router-dom";

const Hooks_Cards = () => {
	// console.log(React_Hooks);

	return (
		<div className="row gap-2 p-0 w-100 d-flex justify-content-center align-items-center">
			{React_Hooks.map((item) => (
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

export default Hooks_Cards;
