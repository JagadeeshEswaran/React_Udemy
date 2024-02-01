/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Inputs = ({ handleList }) => {
	const [name, setName] = useState("");

	const handleButtonClick = (e) => {
		if (!name) {
			alert("Please type a name");
			return;
		}

		handleList(name);
		setName("");
	};

	return (
		<>
			<main className="d-flex flex-column align-items-center w-100 mb-2 txtClr my-3 py-4 justify-content-center">
				<section className="w-70">
					<h6 className="ps-3">Name</h6>

					<article className="d-flex flex-column w-100">
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="Add a name to Add List"
							className="w-100 px-5 py-2 rounded mb-3"
						/>
						<button
							className="btn btn-primary"
							onClick={(e) => handleButtonClick(e)}>
							Add to List
						</button>
					</article>
				</section>
			</main>
		</>
	);
};

export default Inputs;
