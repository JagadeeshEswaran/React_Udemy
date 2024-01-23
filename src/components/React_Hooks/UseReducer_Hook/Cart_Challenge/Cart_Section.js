/* eslint-disable no-unused-vars */
import React from "react";
import CartItem from "./CartItem";
import cartItems from "./data";
import { useCartContext } from "./GlobalContext";

function Cart_Section() {
	const { cartData } = useCartContext();
	const cartList = Array.from(cartData.entries());

	// console.log(cartList);

	return (
		<>
			<section
				className="w-100"
				style={{
					display: "flex",
					alignItems: "flex-start",
					justifyContent: "center",
					flexDirection: "column",
					minHeight: "50%",
					height: "auto",
					marginTop: "2.5rem",
				}}>
				<article
					className="w-100"
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "100%",
					}}>
					<h5>Your Cart</h5>
				</article>

				{/* <CartItem data={cartItems} /> */}
				<CartItem data={cartList} />
			</section>
		</>
	);
}

export default Cart_Section;
