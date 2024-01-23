/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";

function useFetch(url) {
	const [newUrl, setNewUrl] = useState(url);
	const [message, setMessage] = useState({ name: "Jagadeeshwaran" });
	const [isLoading, setLoading] = useState(true);

	const api_call = async () => {
		try {
			let response = await axios.get(newUrl);

			// console.log(response.data);

			if (response.status === 200) {
				console.log(response.data);

				setMessage({
					isLoading: isLoading,
					isSuccess: true,
					username: response.data.name,
					location: response.data.location,
					followers: response.data.followers,
					avatar: response.data.avatar_url,
				});
			}
		} catch (error) {
			console.log(error);
			setMessage({
				isLoading: !isLoading,
				isSuccess: false,
			});
		}
	};

	useEffect(() => {
		api_call();
	}, []);

	const setter = (url) => {
		setNewUrl(url);
	};

	return { message, setter };
}

export default useFetch;
