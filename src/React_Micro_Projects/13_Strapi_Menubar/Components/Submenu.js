/* eslint-disable no-unused-vars */
import React from "react";
import { useStrapiContext } from "../StrapiContext";
import sublinks from "../data";

function Submenu() {
	const { pageId, setPageId } = useStrapiContext();

	let currPage = sublinks.find((item) => item.pageId === pageId);

	// console.log(currPage);

	return (
		<div
			className={currPage ? "submenu show-submenu show" : "submenu"}
			onMouseLeave={() => setPageId(null)}>
			<h5>{currPage?.page}</h5>

			<div
				className="submenu-links show"
				style={{
					gridTemplateColumns: currPage?.links?.length > 2 ? "1fr 1fr" : "1fr",
				}}>
				{currPage?.links?.map((item) => (
					<p key={item.id} className="show">
						<span className="show">{item.icon}</span>
						{item.label}
					</p>
				))}
			</div>
		</div>
	);
}

export default Submenu;
