/* eslint-disable no-unused-vars */
import React from "react";
import sublinks from "../data";
import { useStrapiContext } from "../StrapiContext";
import "../../../styles/strapi.css";

function NavLinks() {
	const { pageId, setPageId } = useStrapiContext();

	console.log(pageId);

	return (
		<div className="nav-links">
			{sublinks.map((item) => (
				<div
					key={item.pageId}
					className="strapi-nav-link d-flex flex-row "
					onMouseOver={() => setPageId(item.pageId)}
					onClick={() => setPageId(item.pageId)}
					// onMouseEnter={() => setPageId(item.pageId)}
				>
					<button className="strapi-nav-link">{item.page}</button>
				</div>
			))}
		</div>
	);
}

export default NavLinks;
