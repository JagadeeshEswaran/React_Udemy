import React from "react";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import ReactQuery_Container from "./ReactQuery_Container";
import react_query_icon from "../../../assets/Tool&Libraries/react_query/react-query-icon.svg";
import Modal_Cantainer from "../../utils/Modals/Modal_Container";
import code_image1 from "../../../assets/Tool&Libraries/react_query/server_codes/server_codes_1.png";
import code_image2 from "../../../assets/Tool&Libraries/react_query/server_codes/server_codes_2.png";
import code_image3 from "../../../assets/Tool&Libraries/react_query/server_codes/server_codes_3.png";
import { React_Query_notes } from "../../../data/Side_Note_Data";

const ReactQuery_main = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar />

				{/* Main Section Column of 8 portions */}
				<div className="container col-8 d-flex flex-column align-items-center">
					<div className="card col-1 d-flex gap-3 flex-row justify-content-center align-items-center w-100">
						<div className="border rounded-circle p-2 m-2">
							<img src={react_query_icon} alt="" width={30} height={30} />
						</div>
						<h5 className="my-2 txtClr">React Query Tutorials</h5>

						<div className="ms-5">
							<Modal_Cantainer
								title1="Open Server Codes"
								renderComponent1={
									<Modal_Cantainer
										title1="Server Codes"
										title2="Server Codes"
										renderComponent1={
											<img src={code_image1} width={750} height={400} />
										}
									/>
								}
								renderComponent2={
									<Modal_Cantainer
										title1="Endpoints 1"
										title2="Endpoints 1"
										renderComponent1={
											<img src={code_image2} width={750} height={400} />
										}
									/>
								}
								renderComponent3={
									<Modal_Cantainer
										title1="Endpoints 2"
										title2="Endpoints 2"
										renderComponent1={
											<img src={code_image3} width={750} height={400} />
										}
									/>
								}
							/>
						</div>
					</div>
					<ReactQuery_Container />
				</div>

				<Side_notes
					title={React_Query_notes[1]?.title}
					notes={React_Query_notes[1]?.pointers}
					icon={<img src={react_query_icon} />}
				/>
			</div>
		</>
	);
};

export default ReactQuery_main;
