/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const App = () => {
	const [text, setText] = useState("");
	const [items, setItems] = useState([]);

	const handleChange = (e) => {
		setText(e.target.value);

		const newItems = Array.from({ length: 10000 }, () => {
			return (
				<>
					<div>
						{/* <img src="🤞" alt="" /> */}
						<p>🤞</p>
					</div>
				</>
			);
		});

		setItems(newItems);
	};

	return (
		<>
			<section
				className="card col-1 d-flex flex-column align-items-center w-100 mb-2 txtClr"
				style={{ height: "80vh" }}>
				<article className="card txtClr py-3 mt-3 w-50 px-3">
					<h5>User Input</h5>
					<input
						type="text"
						value={text}
						className="w-100 ps-2 pe-5 py-2 rounded fs-4"
						placeholder="Don't Type anything here🥵"
						onChange={handleChange}
					/>
				</article>

				<article className="card txtClr py-3 mt-3 w-75 px-3 d-flex justify-content-center align-items-center flex-column">
					<h4>Items Rendered</h4>

					<div className="d-flex flex-wrap">
						{items.map((item, idx) => (
							<div key={idx}>{item}</div>
						))}
					</div>
				</article>
			</section>
		</>
	);
};

export default App;
