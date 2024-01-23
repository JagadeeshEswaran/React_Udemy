/* eslint-disable react/prop-types */
import React from "react";

export default function Filter_Component({ cardsData, setCategory }) {
	const uniqueCatogory = new Set();

	uniqueCatogory.add("All");
	cardsData.forEach((item) => uniqueCatogory.add(item.category));

	let categoryArray = Array.from(uniqueCatogory);

	const handler = (category) => {
		console.log(category);
		setCategory(category);
	};

	return (
		<div className="txtClr d-flex ">
			{categoryArray.map((item, idx) => (
				<button
					key={item}
					type="button"
					className={`card txtClr mx-2 px-3 btn rounded btn-info`}
					onClick={() => handler(categoryArray[idx])}>
					{item}
				</button>
			))}
		</div>
	);
}
