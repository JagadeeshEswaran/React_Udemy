/* eslint-disable react/no-unknown-property */
import React from "react";

function Reference() {
	return (
		<section className="card d-flex  flex-column justify-content-center align-items-center w-100 px-5 txtClr py-3 mt-2">
			<h5>References : </h5>

			<article className="card p-0 m-0 rounded" style={{ objectFit: "cover" }}>
				<iframe
					className="rounded"
					width="560"
					height="315"
					src="https://www.youtube.com/embed/yCS2m01bQ6w?si=v3vqnO9sbd97wZ4m"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen></iframe>
			</article>

			<article
				className="card p-0 m-0 rounded my-3"
				style={{ objectFit: "cover" }}>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/LWg0OyZQffc?si=PxnvUzSWZuiEXiUY"
					title="YouTube video player"
					frameborder="0"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowfullscreen></iframe>
			</article>
		</section>
	);
}

export default Reference;
