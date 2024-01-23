/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from "react";

export default function Hooks_Rules() {
	return (
		<div className="card my-2 py-1 d-flex justify-content-center align-items-center flex-column w-100 h-auto">
			<h5 className="card-header m-0 p-0 w-100 d-flex justify-content-center align-items-center py-1 txtClr">
				Rules should be followed
			</h5>

			<div className="container-fluid card d-flex justify-content-center align-items-center flex-column my-2 py-3 w-75 txtClr">
				<ul className="m-0">
					<li>
						<h6>Don't use Hooks under Conditions</h6>
						<code>
							<p>
								<code>
									if (codition){" "}
									<code>
										{useEffect(() => {
											//your code
										})}
									</code>
								</code>
							</p>
						</code>
					</li>

					<li>
						<h6>Don't call useEffect after the multiple returns</h6>
						<code>
							<p>
								<code>if (condition) {"return anything    "}</code>
								useEffect(() =>{" "}
								{
									//do Something
								}
								, [])
							</p>
						</code>
					</li>
				</ul>
			</div>
		</div>
	);
}
