import React, { useEffect, useState } from "react";
import Counter_useEffect from "./Tasks/Counter_useEffect";
import Conditional_Rendering from "./Tasks/Conditional_Rendering";
import Hooks_Rules from "./Tasks/Hooks_Rules";
import Short_Circuit from "./Tasks/Short_Circuit";
import SC_Examples from "./Tasks/Short-circuit_Examples";
import Toggle_Challeng from "./Tasks/Toggle_Challeng";
import Load_SecondComp from "./Tasks/Load_SecondComp";
import Clean_up_Timer from "./Tasks/Clean_up_Timer";
import Clean_up_Events from "./Tasks/Clean_up_Events";
import A_Fetch_Users from "./Tasks/A_Fetch_Users";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import { React_Hooks } from "../../../data/BestBooks/App_component_data";

const UseEffect_Hook = () => {
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
				<Side_bar data={React_Hooks[1].tasks} />

				<div className="col-8 container-fluid d-flex justify-content-center align-items-start flex-column">
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center py-1 txtClr">
							useEffect Hook
						</h5>

						<div className="card-body">
							<p className="card-text txtClr">
								useEffect Hook is a React Hook that is used to perform an action
								after the component is mounted.
							</p>
						</div>
					</div>

					{!isLoading ? (
						<>
							<A_Fetch_Users />

							<Counter_useEffect />

							<Conditional_Rendering />

							<Hooks_Rules />

							<Short_Circuit />

							<SC_Examples />

							<Toggle_Challeng />

							<Load_SecondComp />

							<Clean_up_Timer />

							<Clean_up_Events />
						</>
					) : (
						<>
							<h2>Loading, Please Wait...</h2>
						</>
					)}
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default UseEffect_Hook;
