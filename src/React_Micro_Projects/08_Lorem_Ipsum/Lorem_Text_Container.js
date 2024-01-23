/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

export default function Lorem_Text_Container({ data }) {
	return (
		<div className="px-3 py-3" style={{ height: "auto" }}>
			{data.map((item, idx) => {
				return <p key={idx}>{item}</p>
			})}
		</div>
	);
}
