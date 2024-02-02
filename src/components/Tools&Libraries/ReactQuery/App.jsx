import React from "react";
import About from "./About/About";
import Setup from "./About/Setup";
import Tasks_App from "./Example_1/Tasks_App";

const App = () => {
	return (
		<>
			<div style={{ marginBottom: "7vh" }} className="w-100 mt-2">
				<About />
				<Setup />
				<Tasks_App />
			</div>
		</>
	);
};

export default App;
