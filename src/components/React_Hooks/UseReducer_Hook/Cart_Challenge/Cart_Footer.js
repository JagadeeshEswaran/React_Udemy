/* eslint-disable no-unused-vars */
import React from "react";
import { useCartContext } from "./GlobalContext";

function Cart_Footer() {
	const { totalCost } = useCartContext();

	return (
		<div
			className="px-5 w-60"
			style={{
				width: "60%",
				// border: "1px dotted red",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<p className="p-0 m-0">Total</p>

			<article
				className="bg-primary"
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					// border: "1px dotted red",
					height: "3.25rem",
					width: "auto",
					borderRadius: "15%",
					padding: "0.5rem",
				}}>
				$ {totalCost.toFixed(2)}
			</article>
		</div>
	);
}

export default Cart_Footer;
