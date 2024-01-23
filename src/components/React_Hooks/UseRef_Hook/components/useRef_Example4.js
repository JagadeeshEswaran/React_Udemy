/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

export default function UseRef_Example4() {
	const [name, setName] = useState("");
	const prevName = useRef("");

	useEffect(() => {
		prevName.current = name;
	}, [name]);

	// console.log(name);

	return (
		<div className="card d-flex  flex-column justify-content-center align-items-center w-100 px-5 txtClr py-3 mt-2">
			<form action="#" className="my-2 d-flex  flex-column w-75">
				<label htmlFor="name" className="mb-3">
					Name
				</label>

				<article className="d-flex flex-column">
					<input
						className="form-control w-50 me-4 mb-2"
						type="text"
						id="name"
						placeholder="Enter your Name"
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>

					<h6>Current Name : {name}</h6>
					<h6>Previous Name : {prevName.current}</h6>
				</article>
			</form>
		</div>
	);
}
