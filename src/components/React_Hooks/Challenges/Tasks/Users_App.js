import React, { useState } from "react";
import { user_app } from "../challenges_data";

export default function Users_App() {
	const [name, setName] = useState("");
	const [data, setData] = useState(user_app);
	let id = [];
	// const [newUser, setNewUser] = useState({
	// 	id: `${id[id.length - 1]++} `,
	// 	name: "",
	// });

	for (let item of data) {
		id.push(item.id);
	}

	const handleAdd = () => {
		if (!name) return;

		let newUser = { id: Date.now(), name };

		setData([...data, newUser]);
		setName("");
	};

	const removeUser = (id) => {
		let updatedUsers = data.filter((person) => person.id !== id);
		setData(updatedUsers);
	};

	return (
		<div
			className="card col-1 d-flex flex-column align-items-center w-100 mb-2 txtClr p-3 w-75"
			style={{ minHeight: "30vh", height: "auto" }}>
			<form
				action="#"
				className="d-flex flex-column align-items-center justify-content-center mb-3 mx-2">
				<h4>Add / Remove User</h4>

				<label htmlFor="name">Name</label>
				<input
					type="text"
					id="name"
					placeholder="Enter a name"
					className="w-75 px-4 py-2"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>

				<section className="w-75 d-flex justify-content-evenly mt-3">
					<button className="btn btn-success" onClick={() => handleAdd()}>
						Add
					</button>
				</section>
			</form>
			{data.map((item, idx) => (
				<div key={item.id}>
					<p>
						{idx + 1}. {item.name}
					</p>
					<button
						className="btn btn-danger"
						onClick={() => removeUser(item.id)}>
						Remove
					</button>
				</div>
			))}

			{console.log(data)}
		</div>
	);
}
