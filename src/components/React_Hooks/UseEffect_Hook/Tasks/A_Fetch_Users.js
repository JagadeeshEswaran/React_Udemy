import React, { useEffect, useState } from "react";

export default function A_Fetch_Users() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				let response = await fetch(
					"https://jsonplaceholder.typicode.com/users"
				);

				let data = await response.json();

				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="card mb-2 d-flex justify-content-center align-items-center flex-column w-100 h-auto">
			<h5 className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center py-1 txtClr">
				Fetch Data Challenge on Component Mount(useEffect Hook)
			</h5>
			<div className="card-body row gap-1 d-flex justify-content-center align-items-start">
				{users.map((ele) => (
					<>
						<div
							className="card col-4 p-2 py-3 txtClr d-flex justify-content-center align-items-start"
							style={{
								width: "30%",
							}}>
							<h6 className="m-0 p-0">{ele.name}</h6>
							<p className="m-0 p-0">{ele.email}</p>
							<p className="m-0 p-0">
								Website :{" "}
								<span className="fw-semibold text-decoration-none text-warning">
									<a
										href={ele.website}
										className="fw-semibold text-decoration-none text-warning">
										{ele.website}
									</a>
								</span>
							</p>
						</div>
					</>
				))}
			</div>
		</div>
	);
}
