/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Values from "values.js";
import Single_Color_Card from "./Single_Color_Card";
import Puff from "react-loading-icons/dist/esm/components/puff";

export default function Color_List({ code }) {
	// console.log(code);
	const [loading, setLoading] = useState(true);
	const [colors, setColors] = useState();

	useEffect(() => {
		setTimeout(() => {
			if (code) {
				setColors(new Values(code).all(10));
			} else {
				setColors(new Values("#006400").all(10));
			}
			setLoading(false);
		}, 100);
	}, [code]);

	return (
		<div className="txtClr d-flex flex-row flex-wrap mt-5 pb-3 justify-content-center align-items-center">
			{loading ? (
				<div className="mb-4">
					<Puff />
				</div>
			) : (
				colors.map((item, idx) => (
					// console.log(item.hex)
					<Single_Color_Card key={idx} color={item} index={idx} />
				))
			)}
		</div>
	);
}
