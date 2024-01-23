/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Color_List from "./Color_List";

export default function Form_Input({ input, setInput, color, setColor }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		setColor(input);
	};

	// console.log(input);
	return (
		<section className="container txtClr d-flex justify-content-center align-items-center flex-column">
			<div className="card d-flex justify-content-center align-items-center txtClr w-75 py-3">
				<form
					action="#"
					className="d-flex flex-row justify-content-center align-items-center"
					// onSubmit={handleSubmit}
				>
					<h4 className="me-2">Select a Color : </h4>
					<input
						type="color"
						value={input}
						onChange={(e) => {
							setInput(e.target.value);
						}}
						className="me-3"
					/>
					<input
						type="text"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						placeholder="#006400"
						className="fs-5 form-control w-25"
					/>
					<button
						className="btn btn-info ms-3"
						type="submit"
						onClick={(e) => handleSubmit(e)}
						style={{ backgroundColor: input }}>
						Search Color
					</button>
				</form>
			</div>
		</section>
	);
}
