import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Section_cards = ({ data }) => {
	//Props Validation
	Section_cards.propTypes = {
		data: PropTypes.array,
	};
	return (
		<div className="row mt-3 gap-2 p-0 w-100 d-flex justify-content-start align-items-center m-auto">
			{data?.map((data) => (
				// console.log(data)
				<NavLink
					className="card col-md-4 p-0 m-0 d-flex gap-4 flex-row justify-content-center align-items-center"
					to={data.link}
					style={{
						width: "32.5%",
						margin: "20px",
						height: "100px",
						cursor: "pointer",
					}}
					key={data.id}>
					{data?.icon ? (
						<article className="border p-3 rounded-circle">
							<img src={data.icon} alt="" width={50} height={50} />
						</article>
					) : null}
					<h5 className="txtClr">{data.name}</h5>
				</NavLink>
			))}
		</div>
	);
};

export default Section_cards;
