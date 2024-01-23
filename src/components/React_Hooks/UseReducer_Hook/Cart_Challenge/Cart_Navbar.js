/* eslint-disable no-unused-vars */
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { useCartContext } from "./GlobalContext";

function Cart_Navbar() {
	const { totalItemsInCart } = useCartContext();

	return (
		<>
			<section
				className="w-100 px-4 rounded bg-primary d-flex justify-content-between align-items-center"
				style={{
					// border: "1px dotted red",
					height: "4rem",
				}}>
				<h4>UseReducer Cart</h4>
				<article
					className="cartIcon-Container"
					style={{ position: "relative" }}>
					<FaCartPlus
						className="display-4"
						style={{ fontSize: "3rem", color: "aliceblue", height: "2rem" }}
					/>
					<div
						className="qty-circle"
						style={{
							width: "1.35rem",
							height: "1.35rem",
							borderRadius: "50%",
							background: "aqua",
							position: "absolute",
							top: -10,
							right: 0,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							fontWeight: 700,
							color: "blue",
						}}>
						{totalItemsInCart}
					</div>
				</article>
			</section>
		</>
	);
}

export default Cart_Navbar;
