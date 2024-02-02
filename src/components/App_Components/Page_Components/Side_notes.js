/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Side_notes = ({ notes, title, icon }) => {
	// console.log(notes);

	return (
		<div
			className="card col-2 d-flex flex-column align-items-center sideNote txtClr py-3"
			style={{
				height: "86vh",
			}}>
			<h6>{title || "Notes"}</h6>

			<div className="d-flex flex-column justify-content-start w-100">
				{notes?.map((note) => (
					// console.log(note)

					<>
						{note.title && <h6 key={note?.id}>{note?.title}</h6>}

						<ul className="p-0" key={note.id}>
							{note.pointers ? (
								note?.pointers?.map((item, idx) => (
									<li
										className="py-2 ps-2 fw-bold text-info"
										key={idx}
										style={{ fontSize: "0.8rem" }}>
										<span
											style={{
												color: "yellow",
												background: "yellow",
												borderRadius: "50%",
											}}>
											{icon || "=&gt;"}
										</span>{" "}
										{item}
									</li>
								))
							) : (
								<li
									className="py-2 ps-2 fw-bold text-info"
									style={{ fontSize: "0.8rem" }}>
									<span>{icon || "=>"}</span> {note}
								</li>
							)}
						</ul>
					</>
				))}
				{/*  */}
			</div>
		</div>
	);
};

export default Side_notes;
