import React, { useEffect, useState } from "react";
import reviews from "./data";
import Review_Info from "./Review_Info";
import { FcPrevious, FcNext } from "react-icons/fc";

export default function Review_Card() {
	const [showIndex, setShowIndex] = useState(1);

	const setRandomPerson = () => {
		let num = Math.ceil(Math.random() * 5);

		num === showIndex && setRandomPerson;

		setShowIndex(num);
	};

	useEffect(() => {
		setRandomPerson();

		if (showIndex === 5) {
			setShowIndex(1);
		} else if (showIndex === 0) {
			setShowIndex(4);
		}
	}, [showIndex]);

	console.log(showIndex);

	return (
		<>
			<div className="container my-3  d-flex justify-content-center align-items-center flex-column">
				<div
					className={`card p-0 m-auto px-2 h-auto d-flex flex-row my-2 justify-content-center align-items-center py-3 px-4`}
					// className={`carousel-item card p-0 px-2 h-auto d-flex flex-row`}
					style={{ width: "50%", height: "auto" }}>
					<div className="card rounded-circle text-bg-light">
						<FcPrevious
							className="text-center text-dark"
							onClick={() => setShowIndex(showIndex - 1)}
						/>
					</div>

					{reviews.map((item) => (
						<div
							key={item.id}
							className={`container p-0 m-auto px-2 h-auto d-flex flex-row my-2 align-items-center  ${
								item.id !== showIndex && `d-none`
							}`}>
							{/* Image Card */}
							<div
								className="card-img position-relative rounded-circle w-25 h-50"
								style={{ height: "100%" }}>
								<img
									src={item.image}
									alt={item.name}
									className="card-img-top rounded-circle object-fit-cover"
									width={150}
									height={100}
								/>
							</div>

							{/* Texts Container Card */}
							<div className="card-body w-75 d-flex align-items-center flex-column justify-content-center py-0">
								<h6 className="txtClr text-center mt-2 d-flex justify-content-start w-100">
									{item.name}
								</h6>

								<div className="card-text py-1">
									<Review_Info text={item.text} />
								</div>
							</div>
						</div>
					))}

					<div className="card rounded-circle text-bg-light">
						<FcNext
							style={{ color: "aliceblue" }}
							onClick={() => setShowIndex(showIndex + 1)}
						/>
					</div>
				</div>
				<button className="btn btn-primary" onClick={() => setRandomPerson()}>
					Surprise Me
				</button>
			</div>
		</>
	);
}
