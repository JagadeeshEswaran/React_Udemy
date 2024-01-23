/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Navbar_Data, social } from "../../data/BestBooks/App_component_data";
import { TbLayoutNavbarExpandFilled } from "react-icons/tb";
import { FaBars } from "react-icons/fa";

export default function App_Container() {
	const [showLink, setShowLink] = useState(false);
	const [showHover, setShowHover] = useState(false);

	const hoverStyles = {
		color: "red",
		textDecoration: "underline",
	};

	return (
		<nav className="txtClr navbar w-25 mx-4 d-flex flex-column">
			<section className="d-flex flex-row justify-content-between w-100">
				<TbLayoutNavbarExpandFilled
					style={{ fontSize: "3rem" }}
					className="text-info bg-transparent ms-1"
				/>

				{/* Navbar Toggle Button */}
				<button
					className="me-2 rounded text-info bg-dark"
					onClick={() => setShowLink(!showLink)}>
					<FaBars style={{ fontSize: "1.5rem" }} className="rounded px-1" />
				</button>
			</section>

			{/* Nav-items will come here */}
			{showLink && (
				<>
					<section className="d-flex justify-content-start align-items-center w-100">
						<ul className="p-0 mt-2 ps-2">
							{Navbar_Data.map((item) => {
								const { id, name, techs } = item;

								return (
									<li key={id} className="mx-2 my-1">
										<a
											href="/"
											className={`txtClr text-decoration-none icon-link ${
												showHover ? hoverStyles : ""
											}`}
											onMouseEnter={() => setShowHover(true)}
											onMouseLeave={() => setShowHover(false)}>
											{name}
										</a>
									</li>
								);
							})}
						</ul>
					</section>

					{/* Social Links & Icons */}
					<section className="d-flex flex-row justify-content-start align-items-center w-100">
						<ul className="p-0 mt-2 ps-2 d-flex flex-row">
							{social.map((item) => (
								<li key={item.id} className="mx-2 fs-5 txtClr">
									<a href={item.url} className="text-info">
										{item.icon}
									</a>
								</li>
							))}
						</ul>
					</section>
				</>
			)}
		</nav>
	);
}
