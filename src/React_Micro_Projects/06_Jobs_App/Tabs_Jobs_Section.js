/* eslint-disable react/prop-types */
import React from "react";
import Duties from "./Duties";

export default function Tabs_Jobs_Section({ item }) {
	// console.log(item);

	return (
		<div className="txtClr col-9 my-3">
			<div className="card txtClr mb-2 py-3 px-3">
				<div className="info ps-1">
					<h6>Title : {item.title}</h6>
					<p>Company : {item.company}</p>

					<p>Dates : {item.dates}</p>
				</div>

				{item.duties.map((ele, idx) => (
					<div key={idx} className="card mb-2">
						<Duties dutyList={ele} />
					</div>
				))}
			</div>
		</div>
	);
}
