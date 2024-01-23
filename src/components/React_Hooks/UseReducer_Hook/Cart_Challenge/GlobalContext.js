/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useReducer } from "react";
import cartItems from "./data";
import { flattenDiagnosticMessageText } from "typescript";
import {
	CLEAR_CART,
	REMOVE,
	INCREASE,
	DECREASE,
	LOADING,
	DISPLAY_ITEMS,
} from "./Actions";
import { CartReducer } from "./CartReducer";
import { fetchTotals } from "./utils";
import axios from "axios";
const dataURL = "https://course-api.com/react-useReducer-cart-project";

const CartContext = createContext();

const initalState = {
	isLoading: false,
	// cartData: new Map(cartItems.map((item) => [item.id, item])),
	cartData: new Map(),
};

export const CartContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(CartReducer, initalState);

	const { totalItemsInCart, totalCost } = fetchTotals(state.cartData);

	// Cart Functionalities
	// Clear Cart
	const clearCart = () => {
		// console.log({ CLEAR_CART });
		dispatch({ type: CLEAR_CART });
	};

	const removeCartItem = (id) => {
		dispatch({ type: REMOVE, itemId: id });
	};

	const increaseQty = (id) => {
		dispatch({ type: "INCREASE", itemId: id });
	};

	const decreaseQty = (id) => {
		dispatch({ type: "DECREASE", itemId: id });
	};

	const fetchData = async () => {
		dispatch({ type: LOADING });

		try {
			let response = await axios.get(dataURL);

			if (response.status === 200) {
				dispatch({ type: DISPLAY_ITEMS, payload: { cartData: response.data } });
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<CartContext.Provider
			value={{
				...state,
				clearCart,
				removeCartItem,
				increaseQty,
				decreaseQty,
				totalItemsInCart,
				totalCost,
			}}>
			{children}
		</CartContext.Provider>
	);
};

export const useCartContext = () => {
	return useContext(CartContext);
};
