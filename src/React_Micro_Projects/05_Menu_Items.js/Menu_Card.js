/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Filter_Component from "./Filter_Component";
import Cards_Section from "./Cards_Section";
import menu from "./data";

export default function Menu_Card() {
	const [cardsToDisplay, setCardsToDisplay] = useState(menu);
	const [showCategory, setShowCategory] = useState("All");

	useEffect(() => {
		setCardsToDisplay(() => {
			if (showCategory === "All") {
				return menu;
			} else {
				let filteredCard = menu.filter((ele) => ele.category === showCategory);

				return filteredCard;
			}
		});
	}, [showCategory]);

	console.log(showCategory);
	return (
		<div>
			<div className="mb-4 d-flex justify-content-center align-items-center px-4">
				<Filter_Component cardsData={menu} setCategory={setShowCategory} />
			</div>

			<div className="my-4">
				<Cards_Section cardsData={cardsToDisplay} />
			</div>
		</div>
	);
}
