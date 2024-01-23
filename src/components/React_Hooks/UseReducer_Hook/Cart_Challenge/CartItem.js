/* eslint-disable react/prop-types */
import React from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { useCartContext } from "./GlobalContext";

function CartItem({ data }) {
	const { removeCartItem, increaseQty, decreaseQty } = useCartContext();

	if (data.length < 1) {
		return (
			<div
				className="w-100 h-100 mt-4"
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<h5>Uh Oh.. Your Cart looks Empty...</h5>
			</div>
		);
	}

	return (
		<div
			className="w-100 h-100 mt-4"
			style={{
				display: "flex",

				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			{data?.map((item) => {
				const [id, cartItem] = item;

				return (
					<article
						key={id}
						className="row"
						style={{
							height: "5rem",
							width: "70%",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							marginBottom: "0.5rem",
						}}>
						<div className="col-2">
							<img
								src={cartItem.img}
								alt=""
								style={{ width: "5rem", height: "5rem" }}
							/>
						</div>

						<div
							className="col-6 p-0 m-0 h-100"
							style={{
								display: "flex",
								justifyContent: "top",
								alignItems: "start",
								flexDirection: "column",
							}}>
							<p className="p-0 m-0">{cartItem.title}</p>
							<p className="p-0 m-0">$ {cartItem.price}</p>

							<button
								onClick={() => removeCartItem(id)}
								style={{
									background: "none",
									border: "none",
									color: "slategray",
								}}>
								remove
							</button>
						</div>

						<div
							className="col-4"
							style={{
								display: "flex",
								flexDirection: "column",
								justifyContent: "center",
								alignItems: "center",
							}}>
							<FaAngleUp
								className="text-primary"
								onClick={() => increaseQty(id)}
							/>
							{cartItem.amount}
							<FaAngleDown
								className="text-primary"
								onClick={() => decreaseQty(id)}
							/>
						</div>
					</article>
				);
			})}
		</div>
	);
}

export default CartItem;
