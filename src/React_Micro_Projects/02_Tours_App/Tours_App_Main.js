const URL = "https://course-api.com/react-tours-project";

import { useEffect, useState } from "react";
import Side_bar from "../../components/App_Components/Page_Components/Side_bar";
import Side_notes from "../../components/App_Components/Page_Components/Side_notes";
import { Micro_App_Data } from "../../data/BestBooks/App_component_data";
import axios from "axios";
import Tour_Cards from "./Tour_Cards";
import { SlReload } from "react-icons/sl";
import { Puff } from "react-loading-icons";

const Tours_App_Main = () => {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const fetchData = async () => {
		try {
			let response = await axios.get(URL);

			if (response) {
				let data = response.data;
				setTours(data);

				setLoading(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const resetData = () => {
		setLoading(true);

		fetchData();

		setTimeout(() => {
			setLoading(false);
		}, 500);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={Micro_App_Data} />

				<>
					{/* Main Section Column of 8 portions */}
					<div
						className="container col-8 d-flex flex-column align-items-center"
						style={{ paddingBottom: "6vh" }}>
						<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
							<h5 className="my-2 txtClr">React Micro Projects - Tours App</h5>
						</div>

						<div className="card col-1 d-flex flex-column justify-content-center align-items-center w-100">
							<div className="d-flex justify-content-center align-items-center w-100 px-5">
								<h5 className="my-2 py-2 txtClr">Our Tours</h5>

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
								<Tour_Cards data={tours} />
							)}
						</div>
					</div>
				</>

				<Side_notes />
			</div>
		</>
	);
};
export default Tours_App_Main;
