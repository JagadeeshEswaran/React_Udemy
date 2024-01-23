import React from "react";
import PropTypes from "prop-types";

const Birrth_Card = ({ birthdayCardData }) => {
	//Props Validation
	Birrth_Card.propTypes = {
		birthdayCardData: PropTypes.array,
	};
	return (
		<>
			<div className="row mx-auto">
				{birthdayCardData.map((data) => (
					<div
						className="card col-6 py-3 my-2 w-75 mx-auto d-flex flex-row justify-content-center align-items-center"
						key={data.id}>
						<div
							className="object-fit-cover d-flex justify-content-start align-items-center h-75"
							style={{ borderRadius: "50%" }}>
							<img
								src={data.image}
								alt={data.name}
								className="mx-50 pe-2 object-fit-cover"
								style={{ borderRadius: "50%" }}
								height={100}
								width={100}
							/>
						</div>
						<div className="ms-4 txtClr">
							<h5>{data.name}</h5>
							<p style={{ fontSize: "1rem" }}>{data.age}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Birrth_Card;
