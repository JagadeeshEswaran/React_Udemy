import React from "react";

const Footer = () => {
	return (
		<>
			<div
				className="footerStyles footer fixed-bottom d-flex justify-content-center align-items-center bg-gradient shadow p-1 rounded-top-3 rounded-bottom-0 txtClr"
				style={{ height: "5vh" }}>
				<p className="my-2">
					Jagadeeshwaran Eswaran @ {new Date().getFullYear()}
				</p>
			</div>
		</>
	);
};

export default Footer;
