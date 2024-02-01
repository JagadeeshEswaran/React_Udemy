import React from "react";
import Side_bar from "../../../App_Components/Page_Components/Side_bar";
import Side_notes from "../../../App_Components/Page_Components/Side_notes";
import { Side_bar_Data } from "../../../../data/BestBooks/App_component_data";
import ReactMemo_container from "./ReactMemo_container";
import { React_Memo_note } from "../../../../data/Side_Note_Data";

const ReactMemo_Main = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				<Side_bar data={Side_bar_Data[0].sub_secition} />

				<div className="container col-8 d-flex flex-column align-items-center mb-5">
					<main className="card col-1 d-flex flex-column align-items-center w-100 mb-2 txtClr">
						<section className="py-3">
							<h5>React.memo( )</h5>
						</section>
					</main>
					<ReactMemo_container />
				</div>
				<Side_notes notes={React_Memo_note} />
			</div>
		</>
	);
};

export default ReactMemo_Main;
