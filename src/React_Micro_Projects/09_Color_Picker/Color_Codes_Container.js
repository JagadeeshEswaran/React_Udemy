import React, { useState } from "react";
import Form_Input from "./Form_Input";
import Color_List from "./Color_List";

export default function Color_Codes_Container() {
	const [input, setInput] = useState("#006400");
	const [color, setColor] = useState("");

	// console.log(color);

	return (
		<main className="container">
			<Form_Input
				input={input}
				setInput={setInput}
				color={color}
				setColor={setColor}
			/>
			<Color_List code={color} />
		</main>
	);
}
