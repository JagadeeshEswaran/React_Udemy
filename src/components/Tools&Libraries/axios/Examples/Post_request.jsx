/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Each_Question from "../../../utils/Accordian/Each_Question";
import axios from "axios";
import { URL3 } from "./Axios_Container";

const Post_request = () => {
	let data = { name: "Jaga", email: "mail@mail.com" };

	const handleDataSend = async (data) => {
		try {
			const response = await axios.post(URL3, data);

			if (response.status === 201) {
				alert("Success!!!, " + response.data.msg);
			}

			console.log(response.data.msg);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className="card col-1 d-flex flex-column justify-content-center align-items-center w-100 txtClr mt-2">
			<h6 className="pt-3">POST Request</h6>

			<section className="border rounded my-2 mb-3 px-2 pt-3 pe-3 w-75">
				<ul>
					<li>=&gt; With POST Req, we can send Data to the Server</li>
					<li>=&gt; axios.post(url, data`)</li>
					<li>=&gt; More options ( auth headers ) </li>
					<li>
						=&gt; axios.post(url, <span>data</span>,`" "`)
					</li>

					{/* <li>=&gt; </li>
					<li>=&gt;</li> */}
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

					<button
						className="btn btn-warning"
						onClick={() => handleDataSend(data)}>
						Send my Data
					</button>
				</article>
			</section>

			<section className="w-75">
				{/* <Each_Question title="Syntax" image={first_req_pic} /> */}
				{/* <Each_Question title="Show Reference" image={headers_reference} /> */}
			</section>
		</main>
	);
};

export default Post_request;
