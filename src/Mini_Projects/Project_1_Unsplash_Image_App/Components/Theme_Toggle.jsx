/* eslint-disable no-unused-vars */
import React from "react";
import { useUnsplashContext } from "../context";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const Theme_Toggle = () => {
	const { isDarkTheme, toggltTheme } = useUnsplashContext();

	// console.log(isDarkTheme);

	return (
		<>
			{isDarkTheme ? (
				<BsSunFill className="fs-3 theme-toggler" onClick={toggltTheme} />
			) : (
				<BsMoonFill className="fs-3 theme-toggler" onClick={toggltTheme} />
			)}
		</>
	);
};

export default Theme_Toggle;
