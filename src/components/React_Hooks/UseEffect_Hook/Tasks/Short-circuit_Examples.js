/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function SC_Examples() {
	//Truthy
	const [truthy, setTruthy] = useState("I'm Text with Truthy Value..!!");

	//Falsy
	const [falsy, setFalsy] = useState("");

	//For Ternary Operator
	const [user, setUser] = useState("");

	return (
		<div className="card my-2 py-2 d-flex justify-content-center align-items-center flex-column w-100 h-auto">
			<div className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center flex-column txtClr">
				<h5>Short-Circuit Examples</h5>
			</div>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 w-75 txtClr py-3">
				<h5>Rendering JSX Elements with OR Operator</h5>
				<h6>{truthy || "Deafult Value..!!"}</h6>
				<p className="text-secondary">
					{"// Value is Truthy, we render the Value"}
				</p>

				<h6>{falsy || "Deafult Value..!!"}</h6>
				<p className="text-secondary">{"// Value is Falsy, we won't render"}</p>

				<hr className="txtClr w-100" />

				<h5>Rendering JSX Elements with AND Operator</h5>
				<p className="text-secondary">{"If my Value evaluates to Truthy..."}</p>
				<h6>{truthy && <h6>You can See me..!!</h6>}</h6>

				<p className="text-secondary">{"If my Value evaluates to Falsy..."}</p>
				<h6>{falsy && <h6>Can you See me..!!</h6>}</h6>
				<h6 className="text-secondary">( No Render... )</h6>
			</div>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column py-2 w-75 txtClr">
				<h5>Conditional Rendering with Ternary Operator</h5>

				<div className="my-3">
					{user ? (
						<div>
							<h5>Hello, {user.name}</h5>
						</div>
					) : (
						<div>
							<h5>Hello, User..!</h5>
						</div>
					)}

					<button
						className="btn btn-warning"
						onClick={() => setUser({ name: "Jaggy Zeus" })}>
						<h6>Set User to JaggyZeus</h6>
					</button>
				</div>
			</div>
		</div>
	);
}
