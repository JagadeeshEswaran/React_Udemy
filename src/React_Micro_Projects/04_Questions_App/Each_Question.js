/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

export default function Each_Question({ ques, ans }) {
	const [isCollapsed, setCollapsed] = useState(false);

	const hendleButtonClick = () => {
		// console.log("Button Clicked Down to ID : ", id);
		setCollapsed(!isCollapsed);
	};

	return (
		<div className="card my-2 txtClr px-4 py-3">
			<div className="container d-flex justify-content-between">
				{ques}

				{isCollapsed ? (
					<FaChevronCircleDown
						className="fs-4"
						type="button"
						onClick={() => hendleButtonClick()}
					/>
				) : (
					<FaChevronCircleUp
						className="fs-4"
						type="button"
						onClick={() => hendleButtonClick()}
					/>
				)}
			</div>

			{isCollapsed && (
				<div className="card text-white-50 fw- mt-3 px-2 py-2">{ans}</div>
			)}
		</div>
	);
}
