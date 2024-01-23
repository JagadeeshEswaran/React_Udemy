/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { nanoid } from "nanoid";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const SetLocalStorage = (list) => {
	localStorage.setItem("list", JSON.stringify([list]));
};

export default function Form_Component({ setter, list }) {
	const [itemName, setItemName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		// console.log(itemName);
		setItemName("");

		if (!itemName) {
			toast.error("Please enter a valid Item name");
			return;
		} else {
			const newItem = {
				_id: nanoid(),
				item_name: itemName,
				purchased: false,
			};

			let updatedList = [...list, newItem];

			setter(updatedList);
			SetLocalStorage(updatedList);
			toast.success("Item added to list Successfully..!!");
		}
	};

	return (
		<form
			className="card txtClr w-100 txtClr px-3 py-4 d-flex flex-row justify-content-center align-items-center"
			onSubmit={handleSubmit}>
			<label htmlFor="#" className="me-4">
				Add Item :{" "}
			</label>
			<input
				type="text"
				className="form-control w-25"
				value={itemName}
				onChange={(e) => setItemName(e.target.value)}
			/>
			<button className="btn btn-success ms-4" type="submit">
				Add to List
			</button>
		</form>
	);
}
