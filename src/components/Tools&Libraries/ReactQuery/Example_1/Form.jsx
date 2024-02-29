/* eslint-disable no-unused-vars */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { task_buddy_custom_instances } from "../../../../axios/axios_task_buddy";
import { toast } from "react-toastify";
import { useTaskCreate } from "./RQ_Custom_Hooks";

const Form = () => {
	const [newItemName, setNewItemName] = useState("");
	// const { createTask, isLoading } = useTaskCreate(setNewItemName);
	const { createTask, isLoading } = useTaskCreate();

	const handleSubmit = (e) => {
		e.preventDefault();
		createTask(newItemName, { onSuccess: () => setNewItemName("") });
	};

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

					<button
						className="btn btn-success txtClr"
						disabled={isLoading}
						onClick={handleSubmit}>
						Add Task
					</button>
				</section>
			</main>
		</>
	);
};

export default Form;
