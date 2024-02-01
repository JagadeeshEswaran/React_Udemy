/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";
import { URL1 } from "./Axios_Container"; // URL: "https://course-api.com/react-store-products"
import axios from "axios";
import first_req_pic from "../../../../assets/Tool&Libraries/axios/first_req.png";
import Each_Question from "../../../utils/Accordian/Each_Question";

const First_Request = () => {
	const fetchData = async () => {
		try {
			let response = await axios(URL1);

			if (response.statusCode === 200) {
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main className="card col-1 d-flex flex-column justify-content-center align-items-center w-100 txtClr my-2">
			<h6 className="pt-3">First Axios Request</h6>

			<section className="border rounded my-2 mb-3 px-2 pt-3 pe-3">
				<ul>
					<li>=&gt; import axios</li>
					<li>=&gt; Define a function called "fetchData"</li>
					<li>=&gt; Use tryCatch block to handle the response</li>
					<li>=&gt; First console.log() the Error if Any</li>
					<li>=&gt; Store the response in 'response' variable</li>
					<li>
						=&gt; Have a validation, if response.status === 200 to handle the
						success response better
					</li>
				</ul>

				<h6>
					Read for more :{"  "}
					<a
						href="https://axios-http.com/docs/intro"
						style={{ color: "yellow" }}>
						{" "}
						Axios | Docs
					</a>
				</h6>
			</section>

			<section className="w-75">
				<Each_Question title="Syntax" image={first_req_pic} />
				<Each_Question title="Show Reference" image={first_req_pic} />
			</section>
		</main>
	);
};

export default First_Request;
