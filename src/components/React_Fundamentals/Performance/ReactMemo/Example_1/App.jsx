/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Person from "./Person";
import List from "./List";

let data = ["John", "Peter", "Susan", "Anna"];

const App = () => {
	const [people, setPeople] = useState(data);
	const [count, setCount] = useState(0);

	console.log("render @ App Component");

	return (
		<>
			<main className="card col-1 d-flex flex-column align-items-center w-100 mb-2 txtClr">
				<div className="d-flex flex-column align-items-center w-100 mb-2  txtClr">
					<section className="pt-3">
						<h6>Ex.: 1 </h6>
					</section>

					<section className="d-flex flex-column">
						<h6 className="pb-3">
							Memoizing the Component Which can be avoided from re-render
						</h6>
						<section>
							<article className="d-flex justify-content-center align-items-center">
								<button
									onClick={() => setCount(count + 1)}
									className="btn btn-primary">
									Count {count}
								</button>
							</article>

							<List data={data} />
						</section>
					</section>

					<section>
						<p>
							Just memoize the List Component by using, `export default
							React.memo(List)`
						</p>
					</section>
				</div>
			</main>
		</>
	);
};

export default App;
