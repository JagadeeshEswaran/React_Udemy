/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import { reducer } from "./reducer";

let data = [
	{ id: 1, name: "Jaga" },
	{ id: 2, name: "Naga" },
	{ id: 3, name: "Raja" },
	{ id: 4, name: "Praveen" },
	{ id: 5, name: "Rahul" },
];

const defaultState = {
	people: data,
};

export default function UseReducer_Challenge_1a() {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleRemove = (id) => {
		dispatch({ type: "REMOVE_PERSON", personId: id });
	};

	const removeAll = () => {
		dispatch({ type: "CLEAR_LIST" });
		// setPeople([]);
	};

	const reset = () => {
		dispatch({ type: "RESET_LIST" });
		// setPeople(data);
	};

	// console.log(state);

	return (
		<div className="card d-flex justify-content-center align-items-center px-5 mb-2 txtClr">
			<h3 className="card-header w-100">With useReducer Hook</h3>

			{state.people.length ? (
				<>
					{state.people.map((item) => (
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
