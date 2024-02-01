/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Person from "./Person";
import List from "./List";

let data = ["John", "Peter", "Susan", "Anna"];

const App = () => {
	const [people, setPeople] = useState(data);
	const [count, setCount] = useState(0);

	console.log("render @ App Component");

	return (
		<main className="d-flex flex-column">
			<h6>Component with State at Top</h6>
			<p>(Counter State at Parent)</p>
			<section>
				<article className="d-flex justify-content-center align-items-center">
					<button
						onClick={() => setCount(count + 1)}
						className="btn btn-primary">
						Count {count}
					</button>
				</article>

				<List data={data} />
			</section>
		</main>
	);
};

export default App;
