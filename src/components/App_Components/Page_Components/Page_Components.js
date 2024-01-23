import Side_bar from "./Side_bar";
import Main_section from "./Main_section";
import Side_notes from "./Side_notes";

import { Side_bar_Data } from "../../../data/BestBooks/App_component_data";

// eslint-disable-next-line react/prop-types
const Page_Components = () => {
	return (
		<>
			<div className="container-fluid d-flex justify-content-center row m-0 w-100">
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={Side_bar_Data} />

				{/* Main Section Column of 8 portions */}
				<Main_section />

				{/* Side Notes Column */}
				<Side_notes />
			</div>
		</>
	);
};

export default Page_Components;
