/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const StrapiContext = createContext();

export const StrapiAppContext = ({ children }) => {
	const [showSubmenu, setShowSubmenu] = useState(false);
	const [pageId, setPageId] = useState(null);

	const handleSubmenu = () => {
		setShowSubmenu(!showSubmenu);
	};

	return (
		<StrapiContext.Provider
			value={{ showSubmenu, handleSubmenu, pageId, setPageId }}>
			{children}
		</StrapiContext.Provider>
	);
};

export const useStrapiContext = () => {
	return useContext(StrapiContext);
};
