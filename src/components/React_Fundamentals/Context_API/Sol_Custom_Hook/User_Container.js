/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useAppNavBarContext } from "./NavBar";

export default function User_Container() {
	const { user_data, setToken } = useAppNavBarContext();
	const [welcomeMsg, setWelcomeMsg] = useState(true);

	// console.log(user_data);

	const { _id, name, token } = user_data;

	const handleLogout = (args) => {
		setToken(args);
	};

	useEffect(() => {
		token &&
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
						onClick={() => handleLogout(false)}>
						Logout
					</button>
				</div>
			) : (
				<div className="txtClr d-flex justify-content-end w-100 align-items-center">
					<button className="btn btn-info" onClick={() => handleLogout(true)}>
						Login
					</button>
				</div>
			)}
		</div>
	);
}
