import React, { useEffect, useState } from "react";

export default function Conditional_Rendering() {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setError] = useState(false);

	const [user, setUser] = useState(null);
	const URL = "https://api.github.com/users/JagadeeshEswaran";

	useEffect(() => {
		const fetchUser = async () => {
			try {
				let response = await fetch(URL);

				if (!response.ok) {
					setError(true);
					setIsLoading(false);
					return;
				}

				let data = await response.json();
				setUser(data);
			} catch (error) {
				setError(true);
				console.log(error);
			}
			setIsLoading(false);
		};

		fetchUser();
	}, []);

	if (isLoading) {
		return <h5>Loading, Please Wait...</h5>;
	}
	if (isError) {
		return <h5>Uh Oh.. Something went wrong..!!</h5>;
	}

	const { avatar_url, name, company, bio } = user;

	return (
		<div className="card my-2 d-flex justify-content-center align-items-center flex-column w-100 h-auto txtClr">
			<h5 className="card-header m-0 p-0 py-2 w-100 d-flex justify-content-center align-items-center">
				Conditioanl Rendering
			</h5>
			<div className="container-fluid d-flex justify-content-center align-items-center my-2">
				{!isError ? (
					!isLoading ? (
						<div className="card d-flex justify-content-center align-items-center w-75 py-3">
							<h6 className="txtClr">Fetching Data with useEffect Hook</h6>
							<img
								src={avatar_url}
								alt={name}
								className="rounded my-3"
								width={100}
								height={100}
							/>
							<h6 className="card-title txtClr">{name}</h6>
							<h5 className="card-content txtClr">Works @ {company}</h5>
							<h6 className="text-center txtClr">{bio}</h6>
						</div>
					) : (
						// console.log(user.name)
						<h2>Loading, Please Wait...</h2>
					)
				) : (
					<h5>Uh Oh.. That seems not right..!!</h5>
				)}
			</div>
		</div>
	);
}
