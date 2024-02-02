/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Form = () => {
	const [newItemName, setNewItemName] = useState("");

	const handleSubmit = () => {};
	return (
		<>
			<main className="w-75 d-flex justify-content-center align-items-center">
				<section className="w-100 d-flex gap-2 flex-column justify-content-center align-items-center">
					<input
						type="text"
						value={newItemName}
						onChange={(e) => setNewItemName(e.target.value)}
						className="w-50 form-control border-1 border-light text-info"
						placeholder="Enter new task"
					/>

					<button className="btn btn-success txtClr">Add Task</button>
				</section>
			</main>
		</>
	);
};

export default Form;
