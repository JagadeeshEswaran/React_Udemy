/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { globalAxiosInstance } from "../../../../axios/axios";
import global_instance_refer from "../../../../assets/Tool&Libraries/axios/global_instance.png";
import syntac_global_custom from "../../../../assets/Tool&Libraries/axios/syntax_global_custom.png";
import Each_Question from "../../../utils/Accordian/Each_Question";

const Global_Instances = () => {
	let fetchData = async () => {
		let response = await globalAxiosInstance.get("/react-store-products");

		console.log(response.data);
	};

	const handleClick = () => {
		fetchData();
	};

	return (
		<main className="card col-1 d-flex flex-column justify-content-center align-items-center w-100 txtClr mt-2">
			<h6 className="pt-3">Global Context in Axios</h6>

			<section className="border rounded my-2 mb-3 px-2 pt-3 pe-3 w-75">
				<ul>
					<li>
						=&gt; Creating a global instance of Axios can be useful when you
						want to set default configurations for all your HTTP requests.{" "}
					</li>
					<li>
						=&gt; In this example, globalAxiosInstance is created using
						axios.create( ){" "}
					</li>
					<li>
						=&gt; With a set of default configurations like a base URL and
						headers.{" "}
					</li>
					<li>
						=&gt; We can then use this instance to make requests, and the
						default configurations will be applied to all requests made with it.
					</li>
					<li>
						=&gt; This is{" "}
						<span className="text-warning">
							particularly useful when you have a consistent API endpoint and
							headers throughout your application.
						</span>
					</li>
				</ul>

				<article className="d-flex justify-content-between align-items-center mb-2">
					<h6>
						{/* Read about API Docs :{"  "}
						<a
							href="https://icanhazdadjoke.com/api"
							style={{ color: "yellow" }}>
							{" "}
							dadJokes.com | Docs
						</a> */}
					</h6>

					<button className="btn btn-warning" onClick={() => handleClick()}>
						Fetch Data
					</button>
				</article>
			</section>

			<section className="w-75">
				<Each_Question
					title="Syntax for creating Instances"
					image={syntac_global_custom}
				/>
				<Each_Question
					title="Global Instance in Axios"
					image={global_instance_refer}
				/>
			</section>
		</main>
	);
};

export default Global_Instances;
