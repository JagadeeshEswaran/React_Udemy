/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

export default function Clean_up_Timer() {
	//For Second Component, without Clean-up Function
	const [toggle1, setToggle1] = useState(false);
	const [timer1, setTimer1] = useState(0);

	//For Second Component, with Clean-up Function
	const [toggle2, setToggle2] = useState(false);
	const [timer2, setTimer2] = useState(0);

	return (
		<div
			className="card my-2 py-2 d-flex justify-content-center align-items-center flex-column w-100 h-auto"
			autoFocus={true}>
			<div className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center flex-column py-1">
				<h5>Clean-up Function (Timers)</h5>
				<p>Refer Console to get better idea..!</p>
			</div>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75">
				<button
					className="btn btn-primary"
					onClick={() => setToggle1(!toggle1)}>
					Toggle Load the Second Component (Without Clean-up Function)
				</button>

				{toggle1 ? (
					<>
						<Second_comp timer={setTimer1} time={timer1} />
						<p>(Click multiple times, you can see the timer will run-faster)</p>
						<button className="btn btn-warning" onClick={() => setTimer1(0)}>
							Reset to Zero
						</button>
					</>
				) : (
					<h5 className="fw-semibold text-warning">
						Click the button to Load Second Component
					</h5>
				)}
			</div>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75">
				<button
					className="btn btn-primary"
					onClick={() => setToggle2(!toggle2)}>
					Toggle Load the Second Component{" "}
					<span className="fw-semibold">(With Clean-up Function)</span>
				</button>

				{toggle2 ? (
					<>
						<Second_Component_With_CleanUp timer={setTimer2} time={timer2} />
						<p>(the timer bug cleared here...)</p>
						<button className="btn btn-warning" onClick={() => setTimer2(0)}>
							Reset to Zero
						</button>
					</>
				) : (
					<h5 className="fw-semibold text-warning">
						Click the button to Load Second Component
					</h5>
				)}
			</div>
		</div>
	);
}

export const Second_comp = ({ timer, time }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		setInterval(() => {
			timer((time) => time + 1);
		}, 1000);
	}, []);

	return (
		<>
			{loading ? (
				<h5 className="fw-bold text-warning"> Loading....</h5>
			) : (
				<>
					<h4 className="fw-bold text-success">Second Component Loaded..!!</h4>
					<h6>{time} Seconds, since Component Loaded</h6>
				</>
			)}
		</>
	);
};

export const Second_Component_With_CleanUp = ({ timer, time }) => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2000);
		const clean_up = setInterval(() => {
			time = 0;
			timer((time) => time + 1);
		}, 1000);

		return () => {
			clearInterval(clean_up);
			console.log("Clean-up Function is Cleared..");
		};
	}, []);

	return (
		<>
			{loading ? (
				<h5 className="fw-bold text-warning"> Loading....</h5>
			) : (
				<>
					<h4 className="fw-bold text-success">Second Component Loaded..!!</h4>
					<h6>{time} Seconds, since Component Loaded</h6>
				</>
			)}
		</>
	);
};
