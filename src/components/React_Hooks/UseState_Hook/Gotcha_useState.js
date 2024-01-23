import React, { useState } from "react";
import { SlReload } from "react-icons/sl";

const Gotcha_useEffect = () => {
	const [count, setCount] = useState(0);
	const [count1, setCount1] = useState(0);
	const [count2, setCount2] = useState(0);

	const handleBtnClick = () => {
		setCount(count + 1);
	};

	const handleBtnClick2 = () => {
		setCount1((currentState) => {
			const newState = currentState + 1;
			return newState;
		});
	};

	const handleBtnClick3 = () => {
		setTimeout(() => {
			setCount2((prevCount2) => {
				return prevCount2 + 1;
			});
		}, 3000);
	};

	console.log(count);
	console.log(count1);

	return (
		<div className="card w-100 mt-1 p-4 txtClr">
			<div className="d-flex justify-content-between align-items-center">
				<div className="card-title">
					<h5>Task - 3 useState Gotcha</h5>
					<h6>Observe the Count value in UI & Console</h6>
				</div>

				<div
					type="button"
					className="txtClr me-4 fw-bolder fs-4"
					onClick={() => {
						setCount(0), setCount1(0), setCount2(0);
					}}
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					data-bs-custom-class="custom-tooltip"
					title="Click to Reset Data">
					<SlReload />
				</div>
			</div>

			<div className="d-flex justify-content-between align-items-center flex-column">
				<div className="container row gap-1 d-flex justify-content-between align-items-center">
					<div
						className="card col-4 justify-content-center align-items-center flex-column px-3 py-4"
						style={{ width: "18rem" }}>
						<h2 className="txtClr">{count}</h2>

						<button
							className="btn btn-primary"
							onClick={() => handleBtnClick()}>
							Click to Increase
							<h6>(non-optimized)</h6>{" "}
						</button>
					</div>
					<div
						className="card col-4 justify-content-center align-items-center flex-column px-3 py-4"
						style={{ width: "18rem" }}>
						<h2 className="txtClr">{count1}</h2>

						<button
							className="btn btn-primary"
							onClick={() => handleBtnClick2()}>
							Click to Increase <h6>(Optimized)</h6>{" "}
						</button>
					</div>

					<div
						className="card col-4 d-flex justify-content-center align-items-center flex-column px-3 py-4"
						style={{ width: "18rem" }}>
						<h2 className="txtClr">{count2}</h2>

						<button
							className="btn btn-primary"
							onClick={() => handleBtnClick3()}>
							Click to 5 Times
							<h6>(Optimized)</h6>{" "}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gotcha_useEffect;
