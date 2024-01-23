import React, { useState } from "react";
import { Jaga, Naga } from "./Hooks_Data";
import { SlReload } from "react-icons/sl";

const Show_Hobby = () => {
	// const person1 = { ...Jaga };
	// const person2 = { ...Naga };

	// const [name, setName] = useState(person1.name);
	// const [age, setAge] = useState(person1.age);
	// const [hobby, setHobby] = useState(person1.hobby);

	const [person, setPerson] = useState(Jaga);

	const handleChange = () => {
		// setName(person2.name);
		// setAge(person2.age);
		// setHobby(person2.hobby);
		setPerson(Naga);
	};

	return (
		<div className="card w-100 p-4 txtClr mt-1">
			<div className="d-flex justify-content-between align-items-center">
				<div>
					<h5>Task - 2 Working with Objects</h5>
					<h6>Change the Person Profile with a Button</h6>
				</div>

				<div
					type="button"
					className="txtClr me-4 fw-bolder fs-4"
					onClick={() => setPerson(Jaga)}
					data-bs-toggle="tooltip"
					data-bs-placement="top"
					data-bs-custom-class="custom-tooltip"
					title="Click to Reset Data">
					<SlReload />
				</div>
			</div>

			<div className="d-flex justify-content-center align-items-center flex-column">
				<h3>{person.name}</h3>
				<h4>{person.age}</h4>
				<h3>{person.hobby}</h3>
				<button className="btn btn-primary" onClick={() => handleChange()}>
					Click to Change
				</button>
			</div>
		</div>
	);
};

export default Show_Hobby;
