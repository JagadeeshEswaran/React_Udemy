/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import Tour_Info from "./Tour_Info";
import { Puff } from "react-loading-icons";

export default function Tour_Cards({ data }) {
	const [loading, setLoading] = useState(true);
	const [tourData, setTourData] = useState([...data]);

	const removeTour = (id) => {
		setTourData(tourData.filter((ele) => ele.id !== id));
	};

	useEffect(() => {
		setTourData([...data]);
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	return (
		<>
			{loading ? (
				<>
					<div className="mb-4">
						<Puff />
					</div>
				</>
			) : (
				<>
					<div className="row container gap-3 d-flex justify-content-center align-items-start mb-4">
						{tourData.map((tour) => (
							<>
								<div
									className="card col-4 py-3 h-auto"
									style={{ width: "28%", height: "auto" }}>
									<div className="card position-relative">
										<img
											src={tour.image}
											alt={tour.name}
											className="card-img-top rounded"
											width={150}
											height={250}
										/>

										<div
											className="txtClr py-1 px-2 bg-success"
											style={{
												position: "absolute",
												top: "0",
												right: "0",
												borderRadius: "0 0.4rem 0 0.5rem",
											}}>
											$ {tour.price}
										</div>
									</div>

									<h6 className="card-subtitle txtClr text-center mt-2 pt-2">
										{tour.name}
									</h6>

									<div className="card-text py-4">
										<Tour_Info text={tour.info} />
									</div>

									<button
										className="btn btn-info txtClr bg-gradient text-bg-dark cardBtn"
										onClick={() => removeTour(tour.id)}>
										<h6>Not Interested</h6>
									</button>
								</div>
							</>
						))}
					</div>
				</>
			)}
		</>
	);
}
