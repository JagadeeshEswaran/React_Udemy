/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from "react";
import { Puff } from "react-loading-icons";

export default function Toggle_Challeng() {
	const [isLoading, setIsLoading] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [userData, setUserData] = useState(null);

	const toggleUserLogin = () => {
		setIsLoading(!isLoading);
		setTimeout(() => {
			!userData
				? (setUserData({
						name: "Jaggy Zeus",
						location: "Coimbatore, TN, IN",
						email: "example@example.com",
				  }),
				  setIsLoggedIn(!isLoggedIn),
				  setIsLoading(false))
				: (setIsLoggedIn(!isLoggedIn), setUserData(null), setIsLoading(false));
		}, 3500);
	};

	return (
		<div className="card my-2 py-2 d-flex justify-content-center align-items-center flex-column w-100 h-auto">
			<div className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center flex-column py-1 txtClr">
				<h5>Toggle Challenge</h5>
				<h6>
					Use a Button to Login a user & Show his Details & Logout the same user
				</h6>
			</div>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75 txtClr">
				<h6>Please Login to see your credentials..</h6>
				<button
					className="btn btn-primary"
					onClick={() => {
						toggleUserLogin();
					}}>
					{!isLoggedIn ? <h6>Log me In</h6> : <h6>Log Out</h6>}
				</button>

				<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75 txtClr">
					{!isLoading ? (
						isLoggedIn ? (
							<>
								<h6>Hello, {userData.name}</h6>
								<p>{userData.location}</p>
								<p>email : {userData.email}</p>
							</>
						) : (
							<>
								<h6>Nothing to Show here..!!</h6>
							</>
						)
					) : (
						<>
							<h6>Loading, Please wait..!!</h6>
							{/* <Oval /> */}
							{/* <Rings /> */}
							{/* <TailSpin /> */}
							{/* <Bars /> */}

							<Puff />

							{/* <BallTriangle />
							<Circles />
							<Hearts />
							<SpinningCircles />
							<ThreeDots />
							
							<Grid />
							
							*/}
						</>
					)}
				</div>
			</div>
		</div>
	);
}
