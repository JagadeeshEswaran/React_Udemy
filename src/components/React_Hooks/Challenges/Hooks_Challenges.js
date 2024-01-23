import { useEffect, useState } from "react";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import { React_Hooks } from "../../../data/BestBooks/App_component_data";
import { Puff } from "react-loading-icons";
import Users_App from "./Tasks/Users_App";

const Hooks_Challenges = () => {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setIsLoading(false);
		}, 3500);
	}, []);
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh", marginTop: "8vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={React_Hooks[2].tasks} />

				<div className="col-8 container-fluid flex-column">
					<div
						className="card col-1 d-flex flex-column justify-content-start align-items-center w-100 mb-2"
						style={{ height: "auto", minHeight: "86vh" }}>
						<h5 className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center py-1 txtClr">
							Hooks Challenges
						</h5>

						<p className="card-text txtClr">
							Practice React Hooks with Simple Challenges and Solidify the
							Learning
						</p>

						{!isLoading ? (
							<>
								<Users_App />
							</>
						) : (
							<>
								<div className="mb-4">
									<Puff />
								</div>
							</>
						)}
					</div>
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default Hooks_Challenges;
