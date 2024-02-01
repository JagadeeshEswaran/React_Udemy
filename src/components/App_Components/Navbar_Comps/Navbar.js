/* eslint-disable no-unused-vars */
import React from "react";
import { Navbar_Data } from "../../../data/BestBooks/App_component_data";
import Nav_List from "./Nav_List";
import { AiFillHome } from "react-icons/ai";
import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GiReturnArrow } from "react-icons/gi";

const Navbar = ({ getSection }) => {
	const navigate = useNavigate();

	//Props Validation
	Navbar.propTypes = {
		getSection: PropTypes.func,
	};

	return (
		<nav className="navbar navbar-expand-lg py-2 m-0">
			<div className="container-fluid text-body-emphasis fw-bold bg-opacity-50 ">
				<div className="ms-4 mt-3 mt-lg-0 w-100 bg-opacity-75 d-flex">
					<NavLink
						className="d-flex justify-content-center align-items-center txtClr myIcon"
						// style={{ color: "black" }}
						onClick={() => navigate(-1)}>
						<GiReturnArrow className="fs-3" />
					</NavLink>

					<Link to={"/"} className="navbar-brand ms-4 txtClr">
						My Learnings
					</Link>

					<div
						className="container fs-4 txtClr"
						// onClick={() => getSection("Main_section")}>
					>
						<Link to={"/"} className="txtClr myIcon">
							<AiFillHome />
						</Link>
					</div>

					<button
						className="navbar-toggler me-3"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbar_list"
						aria-controls="navbar_list"
						aria-expanded="false"
						aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>

				<div className="txtClr">
					<Nav_List nav_list={Navbar_Data} />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
