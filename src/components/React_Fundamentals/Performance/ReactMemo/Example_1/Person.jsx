/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Person = ({ name }) => {
	console.log("Render at Person Component");

	return (
		<>
			<p>{name}</p>
			{/* <article className="py-5 d-flex flex-column justify-content-center align-item-center">
			</article> */}
		</>
	);
};

export default Person;
