/* eslint-disable no-unused-vars */
import React from "react";
import { useUnsplashContext } from "../context";
import Search_Form from "./Search_Form";
import Gallery from "./Gallery";

const Main_Section = () => {
	const { isDarkTheme, toggltTheme } = useUnsplashContext();

	// console.log(isDarkTheme);
	return (
		<>
			<main
				className={
					isDarkTheme
						? "unsplash_main_section_dark"
						: "unsplash_main_section_light"
				}
				style={{
					height: "100%",
					borderRadius: "0.5rem",
					// marginTop: "0.25rem",
				}}>
				<section className=" my-3" style={{ height: "4rem" }}>
					<Search_Form />
				</section>

				<section>
					<Gallery />
				</section>
			</main>
		</>
	);
};

export default Main_Section;
