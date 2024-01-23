/* eslint-disable react/prop-types */
import React from "react";
import User_Container from "./User_Container";

export default function NavLinks({ user_data, setToken }) {
	return (
		<div className="txtClr d-flex justify-content-between align-items-center w-75">
			<ul className="d-flex justify-content-between w-25 p-0 m-0">
				<li className="p-0 m-0">Home</li>
				<li className="p-0 m-0">About</li>
				<li className="p-0 m-0">Contact</li>
			</ul>

			<User_Container user_data={user_data} setToken={setToken} />
		</div>
	);
}
