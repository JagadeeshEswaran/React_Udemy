/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

export default function UseRef_Example1() {
	const [count, setCount] = useState(0);
	const [userInput, setUserInput] = useState("");

	// Method 1 => Setup useRef
	const refContainer = useRef(null);

	// console.log(refContainer);

	// Method 2 => Setup useRef
	useEffect(() => {
		console.log(refContainer.current.value);
	}, [count]);

	const handleSubmit = (e) => {
		e.preventDefault();

		let userInput = refContainer.current.value;
		setUserInput(userInput);
		console.log(userInput);
	};

	return (
		<div className="card d-flex  flex-column justify-content-center align-items-center w-100 px-5 txtClr py-3">
			<form
				action="#"
				className="my-2 d-flex  flex-column w-75"
				onSubmit={handleSubmit}>
				<label htmlFor="name" className="mb-3">
					User Input
				</label>

				<article className="d-flex flex-row">
					<input
						className="form-control w-25 me-4"
						type="text"
						id="name"
						placeholder="Type Something"
						ref={refContainer}
					/>

					<h4>console.log : {userInput}</h4>
				</article>

				<button type="submit" className="btn btn-info mt-2">
					Submit
				</button>
			</form>

			<hr className="border border-bottom w-100" />

			<article className="d-flex flex-column justify-content-center align-items-center w-100 px-5 txtClr">
				<h3>{count}</h3>
				<button className="btn btn-info" onClick={() => setCount(count + 1)}>
					Increase
				</button>
			</article>
		</div>
	);
}
