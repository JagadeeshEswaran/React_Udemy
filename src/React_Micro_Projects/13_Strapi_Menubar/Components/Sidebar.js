/* eslint-disable no-unused-vars */
import React from "react";
import { useStrapiContext } from "../StrapiContext";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";

function Sidebar() {
	const { showSubmenu, handleSubmenu } = useStrapiContext();

	return (
		<>
			{showSubmenu ? (
				<div className="sidebar">
					<div className="sidebar-container">
						<button
							className="close-btn"
							onClick={() => handleSubmenu(!showSubmenu)}>
							<FaTimes />
						</button>

						<div className="sidebar-links">
							{sublinks.map((item) => (
								<section key={item.pageId}>
									<article>
										<h5>{item.page}</h5>

										<div className="sidebar-sublink">
											{item.links.map((link) => (
												<a href="" key={link.id}>
													<span>{link.icon}</span> {link.label}
												</a>
											))}
										</div>
									</article>
								</section>
							))}
						</div>
					</div>
				</div>
			) : null}
		</>
	);
}

export default Sidebar;
