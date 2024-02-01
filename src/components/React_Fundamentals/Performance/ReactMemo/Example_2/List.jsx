/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Person from "./Person";

const List = ({ data, removePerson }) => {
	return (
		<>
			<article
				className="w-100 pt-4 d-flex justify-content-center align-items-center flex-column"
				style={{ width: "100%" }}>
				{data.map((item) => (
					<div
						key={item.id}
						onDoubleClick={() => removePerson(item.id)}
						style={{ cursor: "pointer" }}>
						<Person name={item.name} id={item.id} removePerson={removePerson} />
					</div>
				))}
			</article>
		</>
	);
};

export default React.memo(List);
// export default List;
