/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Person from "./Person";
import List from "./List";

let data = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Peter" },
	{ id: 3, name: "Anna" },
	{ id: 4, name: "Susan" },
];

const App = () => {
	const [people, setPeople] = useState(data);
	const [count, setCount] = useState(0);

	const removePerson = (id) => {
		// console.log(id);
		let newPeople = people.filter((person) => person.id !== id);
		console.log(newPeople);
		setPeople(newPeople);
	};

	console.log("render @ App Component");

	return (
		<>
			<main className="card col-1 d-flex flex-column align-items-center w-100 mb-2 txtClr">
				<div className="d-flex flex-column align-items-center w-100 mb-2  txtClr">
					<section className="py-3">
						<h6>Ex.: 2 </h6>
					</section>

					<section className="d-flex flex-column ">
						<p>But, what if </p>
						<section>
							<article className="d-flex justify-content-center align-items-center">
								<button
									onClick={() => setCount(count + 1)}
									className="btn btn-primary">
									Count {count}
								</button>
							</article>

							<List data={people} removePerson={removePerson} />
						</section>
					</section>
				</div>
			</main>
		</>
	);
};

export default App;
