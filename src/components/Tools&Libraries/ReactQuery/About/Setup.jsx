import React from "react";
import { React_Query_notes } from "../../../../data/Side_Note_Data";
import react_query_icon from "../../../../assets/Tool&Libraries/react_query/react-query-icon.svg";

const Setup = () => {
	return (
		<>
			<div className="card col-1 d-flex gap-2 flex-column justify-content-start align-items-start w-100 txtClr py-3 px-3 ps-4">
				<h6>What React Query is all about ?</h6>

				{React_Query_notes[2]?.pointers?.map((point, idx) => (
					<ul key={idx}>
						<li>
							<img src={react_query_icon} alt="" className="pe-2" />
							{point}
						</li>
					</ul>
				))}
			</div>
		</>
	);
};

export default Setup;
