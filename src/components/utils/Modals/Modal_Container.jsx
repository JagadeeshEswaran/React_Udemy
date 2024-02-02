/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import { MyVerticallyCenteredModal } from "./Modal_main";
import { useState } from "react";

export default function Modal_Cantainer({
	title1,
	title2,
	renderComponent1,
	renderComponent2,
	renderComponent3,
}) {
	const [modalShow, setModalShow] = useState(false);

	// console.log(title1);

	return (
		<>
			<Button variant="primary" onClick={() => setModalShow(true)}>
				{title1}
			</Button>

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
				title={title1}
				renderComponent1={renderComponent1}
				renderComponent2={renderComponent2}
				renderComponent3={renderComponent3}
			/>
		</>
	);
}
