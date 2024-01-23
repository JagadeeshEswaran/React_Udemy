/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Lorem_Text_Container from "./Lorem_Text_Container";
import Puff from "react-loading-icons/dist/esm/components/puff";
import text from "./data";

export default function Lorem_App_Container() {
	const [loading, setLoading] = useState(true);
	const [count, setCount] = useState(1);
	const [data, setData] = useState([]);

	useEffect(() => {
		data.length > 0 && setLoading(false);
	}, []);

	const handleSubmit = () => {
		setData(text.slice(0, count));
	};

	// console.log(data);

	return (
		<div className="container txtClr d-flex justify-content-center align-items-center flex-column">
			<div className="container d-flex justify-content-center align-items-center mt-2">
				Select No of Paragraphs :
				<input
					min={1}
					step={1}
					max={8}
					type="number"
					value={count}
					onChange={(e) => setCount(e.target.value)}
					className="form-control w-25 ms-3"
				/>
				<button
					className="btn btn-info ms-3"
					onClick={() => {
						setLoading(false), handleSubmit();
					}}>
					Generate
				</button>
			</div>

			{loading ? (
				<>
					<div className="my-2">
						<Puff />
					</div>
				</>
			) : (
				<div className="card w-75 txtClr my-5">
					<Lorem_Text_Container data={data} />
				</div>
			)}
		</div>
	);
}
