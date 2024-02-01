/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import List from "../List";
import Counter from "./Counter";

let data = ["John", "Peter", "Susan", "Anna"];

const App = () => {
	const [people, setPeople] = useState(data);

	console.log("render @ App Component");

	return (
		<main className="d-flex flex-column">
			<h6>Component with State at Bottom</h6>
			<p className="fs-6">(Counter State at Counter Component)</p>
			<section>
				<Counter />

				<List data={data} />
			</section>
		</main>
	);
};

export default App;
