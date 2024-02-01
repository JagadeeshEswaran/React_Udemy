/* eslint-disable react/prop-types */
import React from "react";

const List = ({ list }) => {
	// console.log(list);

	return (
		<>
			<article className=" d-flex flex-column align-items-center w-100 mb-2 txtClr my-3 py-4 justify-content-center">
				{list?.map(
					(item) => (
						<p key={item.id}>{item.name}</p>
					)
					// console.log(item)
				)}
			</article>
		</>
	);
};

export default List;
