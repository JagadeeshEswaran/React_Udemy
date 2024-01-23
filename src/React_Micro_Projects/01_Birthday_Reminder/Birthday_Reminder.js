import React, { useState } from "react";
import { birthdayCardData } from "./data";
import Birrth_Card from "./Birrth_Card";
import Side_bar from "../../components/App_Components/Page_Components/Side_bar";
import { Micro_App_Data } from "../../data/BestBooks/App_component_data";
import Side_notes from "../../components/App_Components/Page_Components/Side_notes";

function Birthday_Reminder() {
	const [cards, setCards] = useState(birthdayCardData);

	const clearCards = () => {
		setCards([]);
	};

	const removeCard = (id) => {
		setCards(cards.filter((data) => data.id !== id));
	};

	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={Micro_App_Data} />

				{/* Main Section Column of 8 portions */}
				<div
					className="container col-8 d-flex flex-column align-items-center"
					style={{ paddingBottom: "6vh" }}>
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">React Micro Projects</h5>
					</div>

					<div className="card col-1 d-flex flex-column align-items-center w-100">
						<h5 className="my-2 py-2 txtClr">Birthday Reminders</h5>

						<div className="container d-flex flex-column justify-content-center align-items-center w-75">
							<button
								className="btn btn-info w-75 my-3 fw-semibold bg-gradient"
								onClick={() => clearCards()}>
								Clear All
							</button>

							{cards.length !== 0 ? (
								<Birrth_Card birthdayCardData={cards} removeCard={removeCard} />
							) : (
								<div className="my-3">
									<h4>No one has Birthday Today..!</h4>
								</div>
							)}
						</div>
					</div>
				</div>

				<Side_notes />
			</div>
		</>
	);
}

export default Birthday_Reminder;
