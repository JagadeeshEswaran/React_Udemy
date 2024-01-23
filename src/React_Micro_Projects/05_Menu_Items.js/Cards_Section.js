/* eslint-disable react/prop-types */
import React from "react";

export default function Cards_Section({ cardsData }) {
	return (
		<>
			<div className="row container-fluid d-flex justify-content-center align-items-start gap-2">
				{cardsData.map((item) => (
					<div
						key={item.id}
						className="card col-4 p-0 m-0 txtClr overflow-hidden "
						style={{ width: "30%", height: "30rem", objectFit: "contain" }}>
						<img
							src={item.img}
							alt={item.title}
							width={300}
							height={250}
							className="card-img p-0 m-0 h-50"
						/>

						<div className="card-body">
							<header>
								<h5 className="text-center">{item.title}</h5>
								<div className="d-flex justify-content-between">
									<p> $ {item.price}</p>
									<p className="text-info">{item.category}</p>
								</div>
							</header>

							<p className="">{item.desc}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
}
