/* eslint-disable react/no-unescaped-entities */
import React from "react";
import UseRef_Example1 from "./components/useRef_Example1";
import UseRef_Example2 from "./components/useRef_Example2";
import UseRef_Example_3 from "./components/useRef_Example3";
import UseRef_Example4 from "./components/useRef_Example4";
import UseRef_Example_5 from "./components/useRef_Example5";
import Reference from "./components/Reference";

export default function Container() {
	return (
		<section className="w-100 txtClr">
			<UseRef_Example1 />
			<UseRef_Example2 />
			<UseRef_Example_3 />
			<UseRef_Example4 />
			<UseRef_Example_5 />
			<Reference />
		</section>
	);
}
