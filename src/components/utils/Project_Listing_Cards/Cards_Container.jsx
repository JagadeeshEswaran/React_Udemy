import React from "react";
import Cards from "./Cards";
import { Mini_Projects } from "../../../data/BestBooks/App_component_data";
import { NavLink } from "react-router-dom";

const Cards_Container = () => {
	return (
		<>
			<main className="w-100 mt-2 px-3 py-3 rounded-2 txtClr h-100 card d-flex flex-row flex-wrap">
				{Mini_Projects.map((item) => (
					<NavLink key={item.id} to={item.link}>
						<Cards data={item} />
					</NavLink>
				))}
			</main>
		</>
	);
};

export default Cards_Container;
