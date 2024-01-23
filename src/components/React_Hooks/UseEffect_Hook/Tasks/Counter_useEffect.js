import React, { useEffect, useState } from "react";

export default function Counter_useEffect() {
	const [count, setCount] = useState(0);
	const [alert, setAlert] = useState(" ");

	useEffect(() => {
		alert > " "
			? setAlert(" ")
			: setAlert("Click the Button to Increase the Count");
	}, [count]);

	return (
		<div className="card mb-2 py-4 d-flex justify-content-center align-items-center flex-column w-100 h-auto txtClr">
			<div className="h-25">
				<h6>{alert}</h6>
			</div>
			<h2>{count}</h2>
			<button
				className="btn btn-primary w-25"
				onClick={() => setCount(count + 1)}>
				Click to Increase
			</button>
		</div>
	);
}
