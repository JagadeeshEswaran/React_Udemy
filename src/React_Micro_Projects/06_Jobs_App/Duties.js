/* eslint-disable react/prop-types */
import React from "react";
import { FaAnglesRight } from "react-icons/fa6";

export default function Duties({ dutyList }) {
	return (
		<div className="txtClr d-flex justify-content-center align-item-center">
			<div className="container-fluid w-auto pe-0">
				<FaAnglesRight className="fs-6 me-3 h-100" />
			</div>

			<p className="fs-6 py-2 m-0">{dutyList}</p>
		</div>
	);
}
