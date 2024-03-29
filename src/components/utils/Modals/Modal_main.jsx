/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function MyVerticallyCenteredModal(props) {
	// console.log(props.title);

	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton>
				<Modal.Title id="contained-modal-title-vcenter">
					{props.title}
				</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				{props.renderComponent1}
				{props.renderComponent2}
				{props.renderComponent3}
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}
