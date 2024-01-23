/* eslint-disable no-unused-vars */
import { Puff } from "react-loading-icons";
import Cart_Footer from "./Cart_Footer";
import Cart_Navbar from "./Cart_Navbar";
import Cart_Section from "./Cart_Section";
import { useCartContext } from "./GlobalContext";

export default function Cart_Main() {
	const { clearCart } = useCartContext();
	const { isLoading } = useCartContext();

	if (isLoading) {
		return (
			<div
				className="card d-flex justify-content-center align-items-center px-5 mb-2 txtClr"
				style={{
					height: "75vh",
				}}>
				<div className="my-4">
					<Puff />
				</div>
			</div>
		);
	}

	return (
		<div
			className="card d-flex justify-content-center align-items-center px-5 mb-2 txtClr"
			style={{
				height: "75vh",
			}}>
			<h4 className="card-header w-100">Cart Challenge</h4>

			<section
				className="card txtClr w-100 h-100 my-3"
				style={{
					height: "100%",
				}}>
				{/* Cart Navbar */}
				<Cart_Navbar />

				{/* Cart Main Section */}
				<Cart_Section />

				<hr />

				{/* Cart Footer */}
				<article
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}>
					<Cart_Footer />
				</article>

				<article
					className="w-100"
					style={{
						width: "20%",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<button
						onClick={clearCart}
						style={{
							padding: "0.3rem 1rem",
							background: "transparent",
							border: "none",
							color: "red",
							fontWeight: "700",
							letterSpacing: "2px",
							textShadow: "0px 2px 2px rgba(255, 255, 255, 0.4)",
						}}>
						Clear Cart
					</button>
				</article>
			</section>
		</div>
	);
}
