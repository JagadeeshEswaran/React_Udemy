/* eslint-disable react/prop-types */
import React from "react";
import Person from "./Person";

const List = ({ data }) => {
	return (
		<>
			<article
				className="w-100 pt-4 d-flex justify-content-center align-items-center flex-column"
				style={{ width: "100%" }}>
				{data.map((name, idx) => (
					<Person key={idx} name={name} />
				))}
			</article>
		</>
	);
};

export default React.memo(List);
// export default List;
