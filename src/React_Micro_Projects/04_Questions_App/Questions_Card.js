/* eslint-disable react/prop-types */
import Each_Question from "./Each_Question";

export default function Questions_Card({ data }) {
	return (
		<>
			<div className="container my-3  d-flex justify-content-center align-items-center flex-column">
				<div
					className="card bg-opacity-10 p-0 m-auto px-2 h-auto d-flex flex-column my-2 justify-content-center align-items-center py-3 px-4"
					// className={`carousel-item card p-0 px-2 h-auto d-flex flex-row`}
					style={{ width: "75%", height: "auto" }}>
					{data.map((item) => (
						// console.log(item)

						<div key={item.id} className="container h-auto">
							<Each_Question key={item.id} ques={item.title} ans={item.info} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}
