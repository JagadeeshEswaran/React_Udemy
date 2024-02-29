/* eslint-disable no-unused-vars */
import React from "react";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { useUnsplashContext } from "../context";

const Search_Form = () => {
	const { handleSearchStringInput } = useUnsplashContext();

	const handleSearchInput = (e) => {
		e.preventDefault();
		let searchString = e.target.elements.searchInput.value;

		if (!searchString) searchString = "cat";

		// console.log(searchString);
		handleSearchStringInput(searchString);
	};

	return (
		<>
			<main className="d-flex justify-content-center align-items-center w-100">
				<form
					action="#"
					className="my-auto position-relative"
					onSubmit={handleSearchInput}>
					<label
						htmlFor="searchTag"
						className="border py-2 px-1 rounded-start-2">
						Search a Tag
					</label>
					<input
						type="text"
						className="border py-2 px-1 rounded-end-2 fw-bold bg-gradient"
						style={{ width: "25rem" }}
						name="searchInput"
						placeholder="Type something, like 'Cat'"
					/>

					<button
						className="bg bg-transparent border-0 fs-2 text-info"
						style={{ position: "absolute", right: "1%", bottom: "1%" }}
						type="submit">
						<BiSolidSearchAlt2 />
					</button>
				</form>
			</main>
		</>
	);
};

export default Search_Form;
