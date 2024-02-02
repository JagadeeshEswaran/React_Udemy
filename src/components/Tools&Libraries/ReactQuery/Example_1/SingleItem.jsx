/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SingleItem = ({ item }) => {
	return (
		<>
			<main className="w-100 mb-2">
				<section className="d-flex flex-row gap-3 align-items-center justify-content-center w-100 ">
					<input
						type="checkbox"
						checked={item?.isDone}
						onChange={() => console.log("Edit Task")}
					/>

					<p className="p-0 m-0 w-25">{item?.title}</p>

					<button
						className="btn btn-danger p-0 m-0 px-2 ms-5"
						onClick={() => console.log("Delete Task")}>
						X
					</button>
				</section>
			</main>
		</>
	);
};

export default SingleItem;
