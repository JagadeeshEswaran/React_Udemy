import React from "react";
import PropTypes from "prop-types";

const Title = ({ title, subTitle }) => {
	//Prop Validation
	Title.propTypes = {
		title: PropTypes.string.isRequired,
		subTitle: PropTypes.string.isRequired,
	};
	return (
		<div className="section-title">
			<h2>
				{title} <span>{subTitle}</span>
			</h2>
		</div>
	);
};

export default Title;
