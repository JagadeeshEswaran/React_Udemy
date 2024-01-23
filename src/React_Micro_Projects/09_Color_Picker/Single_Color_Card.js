/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Single_Color_Card({ color, index }) {
	const { hex, weight } = color;
	// console.log(color);
	// console.log(`#${hex}`);
	// console.log(weight);

	const handleClick = async (code) => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(code);
				toast.success("Color copied successfully!!");
			} catch (error) {
				console.log(error);
				toast.error("Unable to Copy color to Clipboard..!");
			}
		} else {
			toast.error("Unable to access the Clipboard!!");
		}
	};

	return (
		<div
			className="card txtClr p-2 m-2"
			onClick={() => handleClick(`#${hex}`)}
			style={{
				backgroundColor: `#${hex}`,
				width: 100,
				height: 100,
				cursor: "pointer",
			}}>
			<p className={`${index}` < 10 ? "text-dark" : "text-light"}>{weight}%</p>
			<p className={`${index}` < 10 ? "text-dark" : "text-light"}>#{hex}</p>
		</div>
	);
}
