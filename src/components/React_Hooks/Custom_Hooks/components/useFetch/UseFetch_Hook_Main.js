/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Side_bar from "../../../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../../../App_Components/Page_Components/Side_notes";
import { custom_hooks } from "../../data";
import useFetch from "./UseFetch";
import Puff from "react-loading-icons/dist/esm/components/puff";

const UseFetch_Hooks_Main = () => {
	let url = "https://api.github.com/users/JagadeeshEswaran";
	let base_url = "https://api.github.com/users";
	const { message, setter } = useFetch(url);

	const handleClick = (name) => {
		console.log(name);
		setter(`${base_url}/${name}`);
	};

	console.log(message);

	return (
		<div className="container-fluid d-flex justify-content-center row m-0 w-100">
			<Side_bar data={custom_hooks.hooks_list} />

			<div className="container col-8 d-flex flex-column align-items-center mb-5">
				<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
					<h5 className="my-2 txtClr">useFetch Hooks</h5>
				</div>

				<div className="card d-flex flex-column justify-content-center align-items-center w-100 px-5 txtClr py-3">
					<h5>Fetch GitHub User</h5>

					<form action="#">
						<input type="text" className="form-control my-2" />
					</form>

					<button
						className="btn btn-info"
						onClick={() => handleClick("QuincyLarson")}>
						Fetch
					</button>

					{message.isLoading ? (
						<>
							<div className="my-4">
								<Puff />
							</div>
						</>
					) : (
						<section className="card py-4 px-2 my-3 txtClr">
							<p className="p-0 m-0">{message.username}</p>
						</section>
					)}
				</div>
			</div>

			<Side_notes />
		</div>
	);
};

export default UseFetch_Hooks_Main;
