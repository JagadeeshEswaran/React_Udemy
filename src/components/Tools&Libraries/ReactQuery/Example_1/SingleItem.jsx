/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { useTaskDelete, useTaskUpdate } from "./RQ_Custom_Hooks";

const SingleItem = ({ item }) => {
	const { updateTask, isPending } = useTaskUpdate(item);
	const { deleteTask } = useTaskDelete();

	const handleCheckBox = (id) => {
		updateTask(id, item);
	};

	const handleDelete = (id) => {
		deleteTask(id);
	};

	return (
		<>
			<main className="w-100 mb-2">
				<section className="d-flex flex-row gap-3 align-items-center justify-content-center w-100 ">
					<input
						type="checkbox"
						checked={item?.isDone}
						id={item.id}
						onChange={() => handleCheckBox(item.id)}
					/>

					<p className="p-0 m-0 w-25">{item?.title}</p>

					<button
						className="btn btn-danger p-0 m-0 px-2 ms-5"
						id={item.id}
						onClick={() => handleDelete(item.id)}>
						X
					</button>
				</section>
			</main>
		</>
	);
};

export default SingleItem;
