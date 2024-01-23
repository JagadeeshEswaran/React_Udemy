/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Side_bar from "../../../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../../../App_Components/Page_Components/Side_notes";
import { custom_hooks } from "../../data";
import Puff from "react-loading-icons/dist/esm/components/puff";
import useFetchAPI from "./useFetchAPI";

const App_Main = () => {
	const { url, setUrl, callApi, setCallApi, response } = useFetchAPI();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3500);
	}, [response]);

	// if (response) {
	// 	setLoading(false);
	// }

	// console.log(response);

	return (
		<div className="container-fluid d-flex justify-content-center row m-0 w-100">
			<Side_bar data={custom_hooks.hooks_list} />

			<div className="container col-8 d-flex flex-column align-items-center mb-5">
				<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
					<h5 className="my-2 txtClr">useFetch Hooks</h5>
				</div>

				<div className="card d-flex flex-column justify-content-center align-items-center w-100 px-5 txtClr py-3">
					<h5>Fetch any API</h5>

					<form
						action="#"
						className="w-100 d-flex flex-column justify-content-center align-items-center ">
						<input
							value={url}
							type="text"
							className="form-control my-2 bg-transparent txtClr w-50"
							onChange={(e) => setUrl(e.target.value)}
							placeholder="Please Enter an URL"
						/>
					</form>

					<button
						className="btn btn-info"
						onClick={() => (setCallApi(!callApi), setLoading(true))}>
						Fetch
					</button>

					{isLoading ? (
						<>
							<div className="my-4">
								<Puff />
							</div>
						</>
					) : (
						<section className="card py-4 px-2 my-3 txtClr px-3">
							{!response.isSuccess ? (
								<p className="text-danger p-0 m-0">{response.message}</p>
							) : response.isSuccess ? (
								<>
									<p className="p-0 m-0 text-success">Success!!</p>
									<p className="p-0 m-0 text-success">{response.message}</p>
								</>
							) : null}
						</section>
					)}
				</div>
			</div>

			<Side_notes />
		</div>
	);
};

export default App_Main;
