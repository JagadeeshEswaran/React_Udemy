/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import { URL2 } from "./Axios_Container";
import axios from "axios";
import headers_reference from "../../../../assets/Tool&Libraries/axios/headers.png";
import Each_Question from "../../../utils/Accordian/Each_Question";

const About_Headers = () => {
	const [joke, setJoke] = useState("");
	const [flag, setFlag] = useState(false);

	const fetchJokes = async () => {
		try {
			// let response = await axios.get(URL2);
			// console.log(response);

			let { data } = await axios.get(URL2, {
				headers: {
					Accept: "application/json", // With this, we're expecting JSON Data not HTML Text
				},
			});

			if (data.status === 200) {
				setJoke(data.joke);
			}

			console.log(data);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		if (!flag) {
			// alert(joke);
			setFlag(!flag);
		}

		// alert(joke);
	}, [joke]);

	return (
		<main className="card col-1 d-flex flex-column justify-content-center align-items-center w-100 txtClr mt-2">
			<h6 className="pt-3">Request Headers</h6>

			<section className="border rounded my-2 mb-3 px-2 pt-3 pe-3">
				<ul>
					<li>=&gt; For GET request, headers will come as second argument</li>
					<li>=&gt; axios.get(url, `" "`)</li>
					<li>=&gt; For POST request, headers will come as third argument</li>
					<li>
						=&gt; axios.post(url, <span>data</span>,`" "`)
					</li>
					<li>
						=&gt; With headers, we could send specific requirements or
						information about the request
					</li>
					{/* <li>=&gt; </li>
					<li>=&gt;</li> */}
				</ul>

				<article className="d-flex justify-content-between align-items-center mb-2">
					<h6>
						Read about API Docs :{"  "}
						<a
							href="https://icanhazdadjoke.com/api"
							style={{ color: "yellow" }}>
							{" "}
							dadJokes.com | Docs
						</a>
					</h6>

					<button className="btn btn-warning" onClick={fetchJokes}>
						Get a Joke
					</button>
				</article>
			</section>

			<section className="w-75">
				{/* <Each_Question title="Syntax" image={first_req_pic} /> */}
				<Each_Question title="Show Reference" image={headers_reference} />
			</section>
		</main>
	);
};

export default About_Headers;
