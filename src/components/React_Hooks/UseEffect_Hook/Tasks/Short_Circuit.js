/* eslint-disable no-unused-vars */
import React, { useState } from "react";

export default function Short_Circuit() {
	//Truthy
	const [truthy, setTruthy] = useState("I'm truthy");

	//Falsy
	const [falsy, setFalsy] = useState("");

	return (
		<div className="card my-2 py-2 d-flex justify-content-center align-items-center flex-column w-100 h-auto txtClr">
			<div className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center flex-column py-1">
				<h5>Short-Circuit in React Hooks</h5>
				<h6>(Short-circuit Operators AND & OR)</h6>
			</div>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 w-75 txtClr py-3">
				{/* Truthy AND */}
				<h5>React Rendering Truthy Values with AND</h5>
				<p>
					Truthy AND : <span className="text-secondary">( Will render )</span>
				</p>{" "}
				{truthy && <h6>Can you see me..?</h6>}
				{/* Truthy OR */}
				<h5>React Rendering Truthy Values with OR</h5>
				<p>
					Truthy OR : <span className="text-secondary">( Will render )</span>{" "}
				</p>{" "}
				{truthy || <h6>Can you see me..?</h6>}
				{/* Falsy AND */}
				<h5>React Rendering Falsy Values with AND</h5>
				<p>Falsy AND :</p> {falsy && <h6>Can you see me..?</h6>}
				<p className="text-secondary">( No Render )</p>
				{/* Falsy OR */}
				<h5>React Rendering Falsy Values with OR</h5>
				<p>
					Falsy OR : <span className="text-secondary">( Will render )</span>
				</p>{" "}
				{falsy || <h6>Can you see me..?</h6>}
			</div>
		</div>
	);
}
