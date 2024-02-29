/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SingleItem from "./SingleItem";
import { useTaskFetch } from "./RQ_Custom_Hooks";
// import { useQuery } from "@tanstack/react-query";

const Items = () => {
	let result = useTaskFetch();
	// console.log(result);

	return (
		<>
			<main className="w-100">
				{/* {items?.map((item) => ( */}
				{result?.data?.data?.taskList?.map(
					(item) => (
						<SingleItem key={item.id} item={item} />
					)
					// console.log(item)
				)}
			</main>
		</>
	);
};

export default Items;
