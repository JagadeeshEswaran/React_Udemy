/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();
//Custom Hook => useAppContext()
export const useAppContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
	// State Variables for Sidebar and Modal
	const [showSidebar, setShowSidebar] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleSidebar = () => {
		setShowSidebar(!showSidebar);
	};

	const handleModal = () => {
		setShowModal(!showModal);
	};

	return (
		<GlobalContext.Provider
			value={{ showSidebar, showModal, handleSidebar, handleModal }}>
			{children}
		</GlobalContext.Provider>
	);
};

export default AppContext;
