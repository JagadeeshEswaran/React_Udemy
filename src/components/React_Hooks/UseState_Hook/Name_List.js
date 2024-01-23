import React, { useState } from "react";
import { personData } from "./Hooks_Data";

import { SlReload } from "react-icons/sl";

const Name_List = () => {
	let [data, setData] = useState(personData);

	// console.log(personData);
	const clickCard = (id) => {
		setData(data.filter((person) => person.id !== Number(id)));
	};

	const clearList = () => {
		setData((data = []));
	};
	return (
		<div className="card w-100 p-4 txtClr">
			<div className="d-flex justify-content-between align-items-center">
				<div>
					<h5>Task - 1 Working with Arrays</h5>
					<h6>Create Person Register App</h6>
				</div>

				<div
					type="button"
					className="txtClr me-4 fw-bolder fs-4"
					onClick={() => setData(personData)}
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					data-bs-custom-class="custom-tooltip"
					title="Click to Reset Data">
					<SlReload />
				</div>
			</div>

			{data.map((person) => {
				const { id, name } = person;

				return (
					<div
						key={id}
						className="card bg-gradient d-flex justify-content-center w-100 my-2 py-2 px-5"
						onClick={() => clickCard(id)}>
						<h5 className="txtClr">{name}</h5>
					</div>
				);
			})}

			<button
				type="button"
				className="btn btn-primary mt-3"
				onClick={() => clearList()}>
				Clear All
			</button>
		</div>
	);
};

export default Name_List;
