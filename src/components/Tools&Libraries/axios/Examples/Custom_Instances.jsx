/* eslint-disable no-undef */
import React from "react";
import Each_Question from "../../../utils/Accordian/Each_Question";
import syntac_global_custom from "../../../../assets/Tool&Libraries/axios/syntax_global_custom.png";
import {
	customAxiosInstance1,
	customAxiosInstance2,
} from "../../../../axios/axios";

const Custom_Instances = () => {
	const fetchData1 = async () => {
		let response = await customAxiosInstance1.get("/react-store-products");
		console.log(response.data);
	};

	const fetchData2 = async () => {
		let response = await customAxiosInstance2.get();
		console.log(response.data);
	};

	const handleClick1 = () => {
		fetchData1();
	};
	const handleClick2 = () => {
		fetchData2();
	};

	return (
		<main className="card col-1 d-flex flex-column justify-content-center align-items-center w-100 txtClr mt-2">
			<h6 className="pt-3">Custom Instance in Axios</h6>

			<section className="border rounded my-2 mb-3 px-2 pt-3 pe-3 w-75">
				<ul>
					<li>
						=&gt; A custom instance is similar to a global instance but is
						created for a specific part of your application or use case.{" "}
					</li>
					<li>
						=&gt; We create a custom instance using axios.create() as well,{" "}
					</li>
					<li>
						=&gt; Why Use Custom Instances: Isolation, Flexibility, Convenience{" "}
					</li>
					<li>
						=&gt; This is suitable for scenarios where{" "}
						<span className="text-warning">
							different parts of your application require distinct Axios
							configurations
						</span>{" "}
						.
					</li>
				</ul>

				<article className="d-flex justify-content-between align-items-center mb-2">
					<button className="btn btn-warning" onClick={() => handleClick1()}>
						Fetch Data 1
					</button>
					<button className="btn btn-warning" onClick={() => handleClick2()}>
						Fetch Data 2
					</button>
				</article>
			</section>

			<section className="w-75">
				<Each_Question
					title="Syntax for creating Instances"
					image={syntac_global_custom}
				/>
				<Each_Question title="Custom Instance in Axios" image="" />
			</section>
		</main>
	);
};

export default Custom_Instances;
