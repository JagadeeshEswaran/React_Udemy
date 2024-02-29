/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const getThemePreference = () => {
	const isDarkThemePreferred = window.matchMedia(
		"(prefers-color-scheme: dark)"
	).matches;

	const savedTheme = localStorage.getItem("darkTheme");

	if (savedTheme === null) {
		return isDarkThemePreferred;
	}

	return savedTheme === true;
};

export const Unsplash_App_Context_Provider = ({ children }) => {
	const [isDarkTheme, setIsDarkTheme] = useState(getThemePreference());
	const [searchString, setSearchString] = useState("usa");

	// console.log("Is Dark Theme : ", isDarkTheme);

	const toggltTheme = () => {
		const newTheme = !isDarkTheme;
		setIsDarkTheme(newTheme);

		localStorage.setItem("darkTheme", newTheme);
	};

	const handleSearchStringInput = (str) => {
		setSearchString(str);
	};

	return (
		<AppContext.Provider
			value={{
				isDarkTheme,
				toggltTheme,
				searchString,
				handleSearchStringInput,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useUnsplashContext = () => useContext(AppContext);
