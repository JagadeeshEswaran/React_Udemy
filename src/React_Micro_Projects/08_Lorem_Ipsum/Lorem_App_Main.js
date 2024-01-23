/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Side_bar from "../../components/App_Components/Page_Components/Side_bar";
import { Micro_App_Data } from "../../data/BestBooks/App_component_data";
import { SlReload } from "react-icons/sl";
import Puff from "react-loading-icons/dist/esm/components/puff";
import Side_notes from "../../components/App_Components/Page_Components/Side_notes";
import Lorem_App_Container from "./Lorem_App_Container";

export default function Lorem_App_Main() {
	const [loading, setLoading] = useState(true);

	const resetData = () => {
		setLoading(true);

		setTimeout(() => {
			setLoading(false);
		}, 1500);
	};

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 2500);
	}, []);

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
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2 bg-gradient">
						<h5 className="my-2 txtClr">
							React Micro Projects - Lorem Ipsum App
						</h5>
					</div>

					<div
						className="card col-1 d-flex flex-column justify-content-start align-items-center w-100"
						style={{ height: "auto", minHeight: "81vh" }}>
						<div className="d-flex justify-content-center align-items-center w-100 px-5">
							<h5 className="py-2 txtClr card-header d-flex justify-content-center align-items-center w-100 mb-2  ">
								Try my Lorem Ipsum Generator App{" "}
							</h5>

							<div
								type="button"
								className="txtClr me-4 fw-bolder fs-4"
								style={{ position: "absolute", right: "0" }}
								onClick={() => {
									resetData();
								}}
								data-bs-toggle="tooltip"
								data-bs-placement="top"
								data-bs-custom-class="custom-tooltip"
								title="Click to Reset Data">
								<SlReload />
							</div>
						</div>

						{loading ? (
							<>
								<div className="mb-4">
									<Puff />
								</div>
							</>
						) : (
							<Lorem_App_Container />
						)}
					</div>
				</div>

				<Side_notes />
			</div>
		</>
	);
}
