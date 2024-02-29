/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { QueryClient, useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import Puff from "react-loading-icons/dist/esm/components/puff";
import { useUnsplashContext } from "../context";

// console.log(`${process.env.REACT_APP_UNSPLASH_API_KEY}`);

const url = `https://api.unsplash.com/search/photos?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&query=`;

const Gallery = () => {
	const { searchString } = useUnsplashContext();
	// const queryClient = QueryClient();

	const response = useQuery({
		queryKey: ["images", searchString],
		queryFn: async () => {
			const resp = await axios.get(url + searchString);

			return resp.data;
		},
	});

	// console.log(response);

	if (response.isLoading) {
		return (
			<section className="d-flex justify-content-center align-items-center">
				<Puff />
			</section>
		);
	}

	if (response.isError) {
		return (
			<section className="d-flex justify-content-center align-items-center">
				<h5>Uh Oh... There seems to be an Error...</h5>
			</section>
		);
	}

	const resultData = response.data.results;

	if (resultData.length < 1) {
		return (
			<section className="d-flex justify-content-center align-items-center">
				<h5>😕 No results found..</h5>
			</section>
		);
	}

	// console.log(resultData);

	return (
		<>
			<section className="d-flex justify-content-center align-items-center flex-row flex-wrap ">
				{resultData.map((item) => (
					<article
						key={item?.id}
						className="object-fit-cover border rounded-1 m-2">
						<img
							src={item?.urls.small}
							alt={item?.alt_description}
							width={250}
							height={200}
							className="object-fit-cover rounded-1"
						/>
					</article>
				))}
			</section>
		</>
	);
};

export default Gallery;
