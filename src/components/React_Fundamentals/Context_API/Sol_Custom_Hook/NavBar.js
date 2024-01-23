import React, { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

export const NavBar_Context = createContext();

//Custom Hook => useAppNavBarContext()
export const useAppNavBarContext = () => useContext(NavBar_Context);

export default function NavBar() {
	const [token, setToken] = useState(true);

	const user_data = {
		_id: 1,
		name: "Jagadeeshwaran",
		token: token,
	};

	// console.log(token);

	return (
		<NavBar_Context.Provider value={{ user_data, setToken }}>
			<div className="txtClr my-4 d-flex flex-row justify-content-between align-items-center w-100 px-5">
				<h2 className="p-0 m-0">NavBar</h2>
				<NavLinks />
			</div>
		</NavBar_Context.Provider>
	);
}
