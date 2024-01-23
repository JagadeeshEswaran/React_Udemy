/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

export default function UseRef_Example_5() {
	const [timer, setTimer] = useState(0);
	const [start, reStart] = useState(false);
	const timerContainer = useRef();

	useEffect(() => {
		// const timerInterval = setInterval(() => {
		// 	setTimer(timer + 1);
		// }, 1000);

		timerContainer.current = setInterval(() => {
			setTimer(timer + 1);
		}, 1000);

		return () => {
			clearInterval(timerContainer.current);
		};
	}, [start, timer]);

	return (
		<div className="card d-flex  flex-column justify-content-center align-items-center w-100 px-5 txtClr py-3 mt-2">
			<h5>Timer - Functional Component</h5>

			<section className="d-flex justify-content-start align-items-center my-2">
				<h4 className="me-3 px-2">{timer}</h4>

				<button
					className="btn btn-info"
					onClick={() => clearInterval(timerContainer.current)}>
					Stop Timer
				</button>
			</section>

			<section>
				<button className="btn btn-danger" onClick={() => setTimer(0)}>
					Clear Timer
				</button>

				<button className="btn btn-success ms-3" onClick={() => reStart(true)}>
					Start Timer
				</button>
			</section>
		</div>
	);
}
