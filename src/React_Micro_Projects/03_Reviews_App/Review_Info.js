/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

export default function Review_Info({ text }) {
	const [info, setInfo] = useState([]);
	const [readBtn, setReadBtn] = useState(" Read more");

	let myInfo = text.split("");
	let tempArray = myInfo.map((ch, idx) => (idx <= 80 ? ch : null));

	useEffect(() => {
		setInfo(tempArray.join(""));
	}, []);

	const toggleInfo = () => {
		info.length > 85
			? (setInfo(tempArray), setReadBtn(" Show more"))
			: (setInfo(text), setReadBtn("    Show less"));
	};

	return (
		<div>
			<p className="txtClr m-0 fs-6 fw-light">
				{info}...
				<span
					className="text-success fs-6 fw-bold"
					onClick={() => toggleInfo()}>
					{readBtn}
				</span>
			</p>
		</div>
	);
}
