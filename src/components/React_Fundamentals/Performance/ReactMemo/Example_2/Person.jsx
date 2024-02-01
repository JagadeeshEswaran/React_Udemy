/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Person = ({ name, id, removePerson }) => {
	console.log("Render at Person Component");

	return (
		<div className="d-flex gap-4 mb-3">
			<p>{name}</p>
			<button className="btn btn-danger " onClick={() => removePerson(id)}>
				Remove
			</button>
		</div>
	);
};

export default Person;
