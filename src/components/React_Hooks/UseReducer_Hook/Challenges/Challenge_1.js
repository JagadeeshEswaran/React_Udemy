import { useState } from "react";

let data = [
	{ id: 1, name: "Jaga" },
	{ id: 2, name: "Naga" },
	{ id: 3, name: "Raja" },
	{ id: 4, name: "Praveen" },
	{ id: 5, name: "Rahul" },
];

export default function UseReducer_Challenge_1() {
	const [people, setPeople] = useState(data);

	// console.log(people.filter((item) => item.id !== 5));

	const handleRemove = (id) => {
		let newPeople = people.filter((item) => item.id !== parseInt(id));
		// console.log(newPeople);
		setPeople(newPeople);
	};

	const removeAll = () => {
		setPeople([]);
	};

	const reset = () => {
		setPeople(data);
	};

	return (
		<div className="card d-flex justify-content-center align-items-center px-5 mb-2 txtClr">
			<h3 className="card-header w-100">With useState Hook</h3>

			{people.length ? (
				<>
					{people.map((item) => (
						<article key={item.id} className="px-3 mx-2 my-3">
							<h5>{item.name}</h5>
							<button
								className="px-2 py-2 my-2"
								onClick={(e) => handleRemove(e.target.id)}
								id={item.id}>
								remove
							</button>
						</article>
					))}
					<button className="px-2 py-2 my-2" onClick={removeAll}>
						clear all
					</button>
				</>
			) : (
				<button className="px-2 py-2 my-2" onClick={reset}>
					Reset
				</button>
			)}
		</div>
	);
}
