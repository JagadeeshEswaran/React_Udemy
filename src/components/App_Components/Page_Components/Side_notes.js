/* eslint-disable react/prop-types */
import React from "react";

const Side_notes = ({ notes }) => {
	console.log(notes);

	return (
		<div
			className="card col-2 d-flex flex-column align-items-center sideNote txtClr py-3"
			style={{
				height: "86vh",
			}}>
			<h6>Notes</h6>

			<ul className="p-0">
				{notes &&
					notes[0]?.pointers.map((item, idx) => (
						<li
							className="py-2 fw-bold text-info"
							key={idx}
							style={{ fontSize: "0.8rem" }}>
							<span
								style={{
									color: "yellow",
									background: "yellow",
									borderRadius: "50%",
								}}>
								=&gt;
							</span>{" "}
							{item}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Side_notes;
