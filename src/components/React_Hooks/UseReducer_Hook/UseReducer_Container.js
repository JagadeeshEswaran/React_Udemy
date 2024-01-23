/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Questions_Card from "../../../React_Micro_Projects/04_Questions_App/Questions_Card";
import { useReducer_faqs } from "./faq_data";
import UseReducer_Challenge_1 from "./Challenges/Challenge_1";
import UseReducer_Challenge_1a from "./Challenges/Challenge_1a";
import Cart_Main from "./Cart_Challenge/Cart_Main";
import { CartContextProvider } from "./Cart_Challenge/GlobalContext";

export default function UseReducer_Container() {
	return (
		<section className="w-100 txtClr">
			<Questions_Card data={useReducer_faqs} />

			<section className="container row d-flex">
				<article className="container col-6">
					<UseReducer_Challenge_1 />
				</article>

				<article className="container col-6">
					<UseReducer_Challenge_1a />
				</article>
			</section>

			<CartContextProvider>
				<Cart_Main />
			</CartContextProvider>
		</section>
	);
}
