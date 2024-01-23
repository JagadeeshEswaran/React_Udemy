import React from "react";
import PropTypes from "prop-types";

const Nav_List = ({ nav_list }) => {
	//Props Validation
	Nav_List.propTypes = {
		nav_list: PropTypes.array.isRequired,
	};

	// console.log(nav_list);

	return (
		<div
			className="collapse navbar-collapse d-flex justify-content-lg-center mt-lg-0 mt-4 txtClr mx-2"
			id="navbar_list">
			<ul className="navbar-nav">
				{nav_list.map((item) => (
					<div className="mx-3" key={item.id}>
						{item.techs?.length > 0 ? (
							<li className="nav-item dropdown " key={item.id}>
								<a
									href="#"
									className="nav-link dropdown-toggle txtClr"
									role="button"
									data-bs-collapse="dropdown">
									{item.name}
								</a>
								<ul className="dropdown-menu">
									{item.techs.map((ele, idx) => (
										<li key={idx}>
											<a href="#" className="dropdown-item txtClr">
												{ele}
											</a>
										</li>
									))}
								</ul>
							</li>
						) : (
							<li className="nav-item txtClr" key={item.id}>
								<a href={item.link} className="nav-link txtClr">
									{item.name}
								</a>
							</li>
						)}
					</div>
				))}
			</ul>
		</div>
	);
};

export default Nav_List;
