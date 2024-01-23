import React from "react";
import { FaBars } from "react-icons/fa6";

function Sidebar() {
	return (
		<section className="p-1 w-25 ">
			<button
				className="btn btn-primary p-1 d-flex justify-content-center align-items-center"
				style={{ width: "1.5rem", height: "1.5rem" }}
				type="button"
				data-bs-toggle="offcanvas"
				data-bs-target="#offcanvasScrolling"
				aria-controls="offcanvasScrolling">
				<FaBars />
			</button>

			<div
				className="offcanvas offcanvas-start rounded m-2 w-25"
				data-bs-scroll="true"
				data-bs-backdrop="false"
				tabIndex="-1"
				id="offcanvasScrolling"
				aria-labelledby="offcanvasScrollingLabel">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title" id="offcanvasScrollingLabel">
						Offcanvas with body scrolling
					</h5>
					<button
						type="button"
						className="btn-close"
						data-bs-dismiss="offcanvas"
						aria-label="Close"></button>
				</div>
				<div className="offcanvas-body">
					<p>
						Try scrolling the rest of the page to see this option in action.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Sidebar;
