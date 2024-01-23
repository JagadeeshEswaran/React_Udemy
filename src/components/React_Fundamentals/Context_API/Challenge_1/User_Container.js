/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";

export default function User_Container({ user_data, setToken }) {
	// console.log(user_data);
	const [welcomeMsg, setWelcomeMsg] = useState(true);

	const { _id, name, token } = user_data;

	const handleLogout = (args) => {
		setToken(args);
	};

	useEffect(() => {
		setTimeout(() => {
			setWelcomeMsg(!welcomeMsg);
		}, 10000);
	}, [user_data]);

	return (
		<div className="txtClr w-25">
			{token ? (
				<div className="txtClr d-flex justify-content-between w-100 align-items-center">
					{welcomeMsg ? (
						<h6 className="p-0 m-0">Hello There, {name}</h6>
					) : (
						<h6 className="p-0 m-0">{name}</h6>
					)}

					<button
						className="btn btn-warning ms-3"
						onClick={() => handleLogout(!token)}>
						Logout
					</button>
				</div>
			) : (
				<div className="txtClr d-flex justify-content-end w-100 align-items-center">
					<button className="btn btn-info" onClick={() => handleLogout(!token)}>
						Login
					</button>
				</div>
			)}
		</div>
	);
}
