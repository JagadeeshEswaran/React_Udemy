/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { longList } from "./data";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

export default function Carousel() {
	const [currPerson, setCurrPerson] = useState(0);
	const [people, setPeople] = useState(longList);

	const prevSlide = () => {
		setCurrPerson((lastPerson) => {
			let result = (lastPerson - 1 + people.length) % people.length;
			return result;
		});
	};

	const nextSlide = () => {
		setCurrPerson((prevPerson) => {
			let result = (prevPerson + 1) % people.length;
			return result;
		});
	};

	useEffect(() => {
		let sliderTimer = setInterval(() => {
			nextSlide();
		}, 1500);

		return () => {
			clearInterval(sliderTimer);
		};
	}, [currPerson]);

	const { id, name, title, image, quote } = people[currPerson];

	// console.log(id);

	return (
		<section className="container-fluid d-flex justify-content-center align-items-center">
			{/* {people.map((item, idx) => {
				const { id, image, name, title, quote } = item;

				return (
					
				);
			})} */}

			<div
				key={id}
				className="container-fluid d-flex justify-content-center align-items-center">
				<article
					key={id}
					className="card d-flex justify-content-center align-items-center w-75 py-4 d-flex  d-flex justify-content-center align-items-center flex-row px-4">
					<div className="d-flex justify-content-center align-items-center">
						<button
							type="button"
							className="prev rounded bg-info"
							onClick={prevSlide}>
							<FiChevronLeft />
						</button>
					</div>
					<div className="d-flex justify-content-center align-items-center flex-column">
						<div className="card-img d-flex justify-content-center align-items-center rounded rounded-circle">
							<img
								src={image}
								alt={name}
								width={150}
								height={150}
								className="rounded rounded-circle border border-4 border-info"
								style={{
									objectFit: "cover",
								}}
							/>
						</div>

						<div className="card-header text-info fs-5">
							{name.toUpperCase()}
						</div>

						<div className="card-title txtClr fs-6" style={{}}>
							{title}
						</div>

						<div className="card-body txtClr text-center">{quote}</div>
					</div>
					<div className="d-flex justify-content-center align-items-center">
						<button
							type="button"
							className="next rounded bg-info"
							onClick={nextSlide}>
							<FiChevronRight />
						</button>
					</div>
				</article>
			</div>
		</section>
	);
}
