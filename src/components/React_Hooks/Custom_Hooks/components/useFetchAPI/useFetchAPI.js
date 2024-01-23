/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetchAPI() {
	const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users");
	const [callApi, setCallApi] = useState(false);
	const [response, setResponse] = useState({});

	useEffect(() => {
		const call_api = async () => {
			try {
				let response = await axios.get(url);

				let data = response.data;

				console.log(data);

				setResponse({
					isSuccess: true,
					message: "Please refer to Console tab at DevTool",
				});
			} catch (error) {
				console.log(error);
			}
		};

		if (url) {
			call_api();
		} else {
			setResponse({
				message: "Uh oh.. URL Can't be Empty..!",
			});
		}
	}, [callApi]);

	return { url, setUrl, callApi, setCallApi, response };
}

export default useFetchAPI;
