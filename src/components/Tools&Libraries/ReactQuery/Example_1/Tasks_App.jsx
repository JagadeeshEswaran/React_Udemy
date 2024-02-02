/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Form from "./Form";
import { ToastContainer } from "react-toastify";
import Items from "./Items";
import { task_buddy_custom_instances } from "../../../../axios/axios_task_buddy";

// const items = [
// 	{
// 		id: Date.now(),
// 		name: "Item 1",
// 		isDone: false,
// 	},
// ];

const Tasks_App = () => {
	const [items, setItems] = useState([]);

	const fetchTasks = async () => {
		try {
			let response = await task_buddy_custom_instances.get();

			if (response.status === 200) {
				setItems(response.data.taskList);
			}

			// console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTasks();
	}, []);

	// console.log(items);

	return (
		<div className="card col-1 d-flex gap-3 flex-column justify-content-center align-items-center w-100 txtClr py-3 mt-2">
			<h6>Task Buddy</h6>

			<ToastContainer position="top-center" />
			<Form />
			<Items items={items} />
		</div>
	);
};

export default Tasks_App;
