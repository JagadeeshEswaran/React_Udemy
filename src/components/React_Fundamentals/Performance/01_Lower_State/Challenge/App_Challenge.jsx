/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Inputs from "./Inputs";
import List from "./List";

const App_Challenge = () => {
	const [list, setList] = useState([
		// {
		// 	id: 1,
		// 	name: "Name1",
		// },
		// { id: 2, name: "Name2" },
	]);

	// console.log(name);

	const handleList = (name) => {
		let fakeId = Date.now();
		let newPerson = { id: fakeId, name: name };

		console.log(newPerson);

		setList([...list, newPerson]);
	};

	return (
		<main
			className="card d-flex flex-column align-items-center w-100 mb-2 txtClr"
			style={{ height: "45vh" }}>
			<Inputs handleList={handleList} />
			<List list={list} />
		</main>
	);
};

export default App_Challenge;
