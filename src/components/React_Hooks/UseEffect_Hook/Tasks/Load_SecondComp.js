/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

export default function Load_SecondComp() {
	const [loadSecondComp, setLoadSecondComp] = useState(false);
	return (
		<>
			<div className="card my-2 py-2 d-flex justify-content-center align-items-center flex-column w-100 h-auto">
				<div className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center flex-column py-1">
					<h5>Loading Second Component with useEffect Hook</h5>
				</div>

				<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75">
					Toggle this Button to Load the Second Component
					<button
						className="btn btn-info"
						onClick={() => setLoadSecondComp(!loadSecondComp)}>
						<h6 className="m-0 p-0 my-2">Toggle to Load New Component</h6>
					</button>
					<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75">
						{loadSecondComp ? (
							<Second_Component />
						) : (
							<h4 className="fw-bold text-info">
								Waiting to Load Second Component.....
							</h4>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export const Second_Component = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		console.log("Loading Second Component....");
		setTimeout(() => {
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			{!loading ? (
				<h4 className="fw-bold text-success">
					Hello there!! It's me Second Component here..!!
				</h4>
			) : (
				<h4 className="fw-semibold text-warning">Loading....</h4>
			)}
		</>
	);
};
