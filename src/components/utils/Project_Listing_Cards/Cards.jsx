/* eslint-disable react/prop-types */
import React from "react";

const Cards = ({ data }) => {
	return (
		<>
			<section
				className="border rounded-2 mx-4 mt-3 position-relative card-full-body"
				style={{ width: "13rem", height: "15rem" }}>
				<article
					style={{
						width: "100%",
						height: "100%",
						position: "relative",
					}}>
					<img
						src="/unsplash_sample.png"
						alt=""
						className="rounded-2"
						style={{
							width: "100%",
							height: "100%",
						}}
					/>
				</article>
				<article className="position-absolute bottom-0 w-100 pt-2 pb-1 px-2 text-light border rounded-2 bg-gradient card-bottom-title">
					<p className="p-0 m-0">{data.name}</p>
				</article>
			</section>
		</>
	);
};

export default Cards;
