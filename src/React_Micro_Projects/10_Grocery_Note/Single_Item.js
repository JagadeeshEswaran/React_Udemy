/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

export default function Single_Item({ item, toggleRemove, togglePurchased }) {
	// console.log(item._id);

	return (
		<article
			key={item._id}
			className="w-100 d-flex flex-row justify-content-between align-items-center my-1">
			<section className="d-flex justify-content-center align-items-center ">
				<input
					type="checkbox"
					checked={item.purchased}
					onChange={() => togglePurchased(item._id)}
				/>
				<p
					className="mb-0 ms-3"
					style={{
						textTransform: "capitalize",
						textDecoration: item.purchased && "line-through",
					}}>
					{item.item_name}
				</p>
			</section>
			<button
				className="btn btn-danger m-0 p-0 px-2 py-1"
				onClick={() => toggleRemove(item._id)}>
				Remove
			</button>
		</article>
	);
}
