import React, { useEffect, useState } from "react";

export default function Clean_up_Events() {
	const [toggle1, setToggle1] = useState(false);
	const [toggle2, setToggle2] = useState(false);

	return (
		<div className="card my-2 py-2 d-flex justify-content-center align-items-center flex-column w-100 h-auto">
			<div className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center flex-column py-1">
				<h5>Clean-up Function (Events)</h5>
				<p>
					Refer DevTool (Elements sidebar) (Event Listeners) tab to get better
					idea..!
				</p>
			</div>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75">
				<button
					className="btn btn-primary"
					onClick={() => setToggle1(!toggle1)}>
					Toggle to Mount an event Listener (Without Clean-up Function)
				</button>

				{toggle1 ? (
					<div className="container card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75">
						<Second_Component />
					</div>
				) : (
					<h6>Click to Mount Second Component</h6>
				)}
			</div>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75">
				<button
					className="btn btn-primary"
					onClick={() => setToggle2(!toggle2)}>
					Toggle to Mount an event Listener{" "}
					<span className="fw-semibold text-warning">
						(With Clean-up Function)
					</span>
				</button>

				{toggle2 ? (
					<div className="container card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75">
						<Second_Component_With_CleanUp />
					</div>
				) : (
					<h6>Click to Mount Second Component</h6>
				)}
			</div>
		</div>
	);
}

export const Second_Component = () => {
	const [message, setMessage] = useState("");
	useEffect(() => {
		const displayWishes = () => {
			console.log("Hello there, Have a Great Day..!!");
		};

		window.addEventListener("scoll", displayWishes);

		setTimeout(() => {
			setMessage(
				"After few Clicks, you can see many events have been added under the Scroll event at the DevTool.. This will drastically reduces the App's Performance"
			);
		}, 5000);
	}, []);

	return (
		<>
			<h4 className="fw-bold text-success">Second Component Loaded..!!</h4>
			<p className="text-center mt-4">{message}</p>
		</>
	);
};

export const Second_Component_With_CleanUp = () => {
	const [message, setMessage] = useState("");
	useEffect(() => {
		setTimeout(() => {
			setMessage(
				"Now we can notice very less Scroll events have been added at Event Listeners.. "
			);
		}, 5000);

		const displayWishes2 = () => {
			console.log("Hello there, Have a Great Day..!!");
		};

		window.addEventListener("scoll", displayWishes2);

		//Cleanu-Up
		return () => window.removeEventListener("scroll", displayWishes2);
	}, []);

	return (
		<>
			<h4 className="fw-bold text-success">Second Component Loaded..!!</h4>
			<p className="text-center mt-3">{message}</p>
		</>
	);
};
