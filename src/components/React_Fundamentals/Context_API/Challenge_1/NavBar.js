import React, { useState } from "react";
import NavLinks from "./NavLinks";

export default function NavBar() {
	const [token, setToken] = useState(true);

	const user_data = [
		{
			_id: 1,
			name: "Jagadeeshwaran",
			token: token,
		},
	];

	// console.log(token);

	return (
		<div className="txtClr my-4 d-flex flex-row justify-content-between align-items-center w-100 px-5">
			<h2 className="p-0 m-0">NavBar</h2>
			<NavLinks user_data={user_data[0]} setToken={setToken} />
		</div>
	);
}
