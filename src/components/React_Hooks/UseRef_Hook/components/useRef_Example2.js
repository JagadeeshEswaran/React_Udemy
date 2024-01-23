/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

export default function UseRef_Example2() {
	const [count, setCount] = useState(0);
	const [renderCount, setRenderCount] = useState(1);
	const [userInput, setUserInput] = useState("");

	// Method 1 => Setup useRef
	const refContainer = useRef(null);

	// console.log(userInput);

	// Method 2 => Setup useRef
	useEffect(() => {
		setRenderCount(renderCount + 1);
		// console.log(refContainer);
	}, [userInput]);

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
						ref={refContainer}
						onChange={(e) => setUserInput(e.target.value)}
					/>

					<h6>Your Name : {userInput}</h6>
				</article>
			</form>

			<hr className="border border-bottom w-100" />

			<article className="d-flex flex-column justify-content-center align-items-center w-100 px-5 txtClr">
				<h6>No. of Re-renders : </h6>
				<h3>{renderCount}</h3>
			</article>
		</div>
	);
}
