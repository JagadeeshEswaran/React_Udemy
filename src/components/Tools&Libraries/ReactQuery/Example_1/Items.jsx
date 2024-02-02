/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import SingleItem from "./SingleItem";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { task_buddy_custom_instances } from "../../../../axios/axios_task_buddy";
// import { useQuery } from "@tanstack/react-query";

const Items = ({ items }) => {
	let result = useQuery({
		queryKey: ["tasks"],
		queryFn: () => task_buddy_custom_instances.get(),
	});

	// console.log(result.data.data.taskList);

	return (
		<>
			<main className="w-100">
				{/* {items?.map((item) => ( */}
				{result.data.data.taskList?.map((item) => (
					<SingleItem key={item.id} item={item} />
				))}
			</main>
		</>
	);
};

export default Items;
